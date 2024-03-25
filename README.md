# mySortableDemo
一个基于sortablejs、draggable、eltable的多层拖拽列表demo

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

![image-20240326000231256](.\images\image-20240326000231256.png)

##### aaa->bbb

![image-20240326000401344](.\images\image-20240326000401344.png)

由于是结合实际遇到的情况，所以外层是eltable+sortablejs;内层用了draggable。



#### 问题

遇到的问题:

1.table-key没设置导致拖拽后顺序混乱，以及table-key一定要不同。我原本只是绑定了name,但是会出现下图情况，应该是子节点导致name相同渲染混乱了,找了个和时间相关的随机的key就正常了

![image-20240326001244344](.\images\image-20240326001244344.png)

2.目前的问题是内部的draggable的@end触发不了，暂时没啥影响，后面再看看吧
