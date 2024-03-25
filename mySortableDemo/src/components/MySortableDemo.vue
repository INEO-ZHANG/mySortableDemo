<template>
  <div class="w-full">
    <el-card class="w-full">
      <template #header>
        <div class="card-header">
          <span>MySortableDemo</span>
        </div>
      </template>
      <div class="my-sortable-demo">
        <el-table :data="tableData" :row-key="generateKey">
          <el-table-column class-name="father" label="father" prop="name" />
          <el-table-column label="son">
            <template #default="{ row }">
              <!-- <div v-for="item in row.children" :key="item.sonName">
                {{ item.sonName }}
              </div> -->
              <draggable
                :list="row.children"
                ghost-class="ghost"
                chosen-class="chosenClass"
                animation="300"
                item-key="row.children.sonName"
                @end="sonEnd"
              >
                <template #item="{ element }">
                  <div class="item">
                    {{ element.sonName }}
                  </div>
                </template>
              </draggable>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import Sortable from "sortablejs";
import draggable from "vuedraggable";

const tableData = ref([
  {
    name: "aaa",
    children: [
      {
        sonName: "aaa1",
      },
      {
        sonName: "aaa2",
      },
      {
        sonName: "aaa3",
      },
    ],
  },
  {
    name: "bbb",
    children: [
      {
        sonName: "bbb1",
      },
      {
        sonName: "bbb2",
      },
      {
        sonName: "bbb3",
      },
    ],
  },
  {
    name: "ccc",
    children: [
      {
        sonName: "ccc1",
      },
    ],
  },
  {
    name: "ddd",
    children: [
      {
        sonName: "ddd1",
      },
    ],
  },
]);

function initSort() {
  const el = document.querySelectorAll(
    ".my-sortable-demo .el-table__body-wrapper tbody"
  )[0];
  const sortable = new Sortable(el, {
    animation: 150,
    sort: true,
    draggable: ".el-table__row", // 设置可拖拽行的类名(el-table自带的类名)
    handle: ".my-sortable-demo tbody .el-table__row .father",
    forceFallback: true,
    onEnd: (evt) => {
      const curRow = tableData.value.splice(evt.oldIndex, 1)[0];
      tableData.value.splice(evt.newIndex, 0, curRow);
      console.log(tableData.value);
    },
  });
}

function sonEnd() {
  debugger;
  console.log(tableData.value);
}

const generateKey = () => {
  return Number(Math.random().toString().substr(3, 6) + Date.now()).toString(
    36
  );
};

onMounted(() => {
  initSort();
});
</script>
