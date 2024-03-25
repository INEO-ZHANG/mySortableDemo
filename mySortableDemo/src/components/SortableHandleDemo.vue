<template>
  <div class="w-full">
    <el-card class="w-full">
      <template #header>
        <div class="card-header">
          <span>HandleSortableDemo</span>
        </div>
      </template>
      <div class="handle-demo">
        <el-table :data="tableData" row-key="name">
          <el-table-column
            class-name="father"
            label="father"
            prop="name"
          ></el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import Sortable from "sortablejs";

const tableData = ref([
  {
    name: "aaa",
  },
  {
    name: "bbb",
  },
  {
    name: "ccc",
  },
  {
    name: "ddd",
  },
]);

function initSort() {
  const el = document.querySelectorAll(
    ".handle-demo .el-table__body-wrapper tbody"
  )[0];
  const sortable = new Sortable(el, {
    animation: 150,
    sort: true,
    draggable: ".el-table__row", // 设置可拖拽行的类名(el-table自带的类名)
    forceFallback: true,
    onEnd: (evt) => {
      const curRow = tableData.value.splice(evt.oldIndex, 1)[0];
      console.log(curRow);
      tableData.value.splice(evt.newIndex, 0, curRow);
      console.log(tableData.value);
    },
  });
}

onMounted(() => {
  initSort();
});
</script>
