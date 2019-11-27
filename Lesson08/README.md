组件的结构
==========

## 知识点

vue命令行开发模式为我们带来的组件开发方式。

### 组件文件夹

所有的组件都被统一放在工程中的组件文件夹中。

~~~
{myproject}/src/components/*
~~~

### 组件格式

* template:组件html内容
* script:组件js脚本(ES6)
* style:组件css样式单

## 实战演习

~~~html
<template>
    <div class="container">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
// import ...
export default {
    name: 'HelloWorld',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    font-weight: normal;
    color: red;
}
</style>
~~~

## 课程文件

https://gitee.com/komavideo/LearnVueJS2

## 小马视频频道

http://komavideo.com
