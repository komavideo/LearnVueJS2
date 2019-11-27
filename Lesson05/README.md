引入Bootstrap4
==============

## 知识点

* vue-webpack工程导入bootstrap4框架

## 实战演习

~~~bash
$ cd myweb
$ npm install bootstrap --save --save-exact
$ nano main.js
...
import 'bootstrap/dist/css/bootstrap.min.css'
...
#编辑视图文件，测试Bootstrap功能
$ cd src
$ nano App.vue
...
<button class="btn btn-primary">确定</button>
<button class="btn btn-success">使用</button>
<button class="btn btn-danger">注意</button>
...
$ npm start
~~~

### 【可选】Bootstrap + Vue

https://bootstrap-vue.js.org/

## 课程文件

https://gitee.com/komavideo/LearnVueJS2

## 小马视频频道

http://komavideo.com
