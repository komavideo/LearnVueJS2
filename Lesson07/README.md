自定义css样式
============

## 知识点

* 定义属于自己的样式单文件my.css

## 实战演习

~~~bash
$ cd assets
$ nano my.css
...
.myclass1 {
    color: red;
    border: 1px solid blue;
}
...
$ cd ../
$ nano App.vue
...
#这里必须是该文件对于my.css的相对路径
import './assets/my.css'
...
<div class="myclass1">你好！</div>
...
~~~

## 课程文件

https://gitee.com/komavideo/LearnVueJS2

## 小马视频频道

http://komavideo.com
