# mySortableDemo

一个基于 sortablejs、draggable、eltable 的多层拖拽列表 demo

github:https://github.com/INEO-ZHANG/mySortableDemo

数据结构:

```javascript
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
```

##### 初始:

![image-20240326000003284](https://github.com/INEO-ZHANG/mySortableDemo/blob/main/images/image-20240326000003284.png)

##### aaa2->aaa1

![image-20240326000231256](https://github.com/INEO-ZHANG/mySortableDemo/blob/main/images/image-20240326000231256.png)

##### aaa->bbb

![image-20240326000401344](https://github.com/INEO-ZHANG/mySortableDemo/blob/main/images/image-20240326000401344.png)

由于是结合实际遇到的情况，所以外层是 eltable+sortablejs;内层用了 draggable。

#### 问题

遇到的问题:

1.table-key 没设置导致拖拽后顺序混乱，以及 table-key 一定要不同。我原本只是绑定了 name,但是会出现下图情况，应该是子节点导致 name 相同渲染混乱了,找了个和时间相关的随机的 key 就正常了

![image-20240326001244344](https://github.com/INEO-ZHANG/mySortableDemo/blob/main/images/image-20240326001244344.png)

2.目前的问题是内部的 draggable 的@end 触发不了，暂时没啥影响，后面再看看吧
