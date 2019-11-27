路由也编程
==========

## 知识点

在前面的讲解中我是通过router-link标记来生成页面的a标记，然后进行url转向的，其实我们不仅可以通过标记来实现，还可以通过编程的方式来实现，今天我们就来学习一下。

* router-link(之前做法)
* router.push(location, onComplete?, onAbort?)

## 实战演习

### App.vue

~~~html
<template>
...
    <button @click="btnClick(1)">库里</button>
    <button @click="btnClick(2)">哈登</button>
    <hr>
    <router-link :to="{ name: 'Player', params: { uid: 1 }}">库里</router-link>
    <router-link :to="{ path: '/player/2/stats' }">哈登</router-link>
...
</template>
<script>
...
    methods: {
        btnClick(uid) {
            this.$router.push({ path: `/player/${uid}` });
            //this.$router.push({ path: `/player/${uid}/stats` });
            //this.$router.push({ name: 'Player', params: { uid: uid } });
            //this.$router.push({ path: '/player', query: { uid: uid }}); //url-get参数写法
            //url履历控制
            //this.$router.go(-1);
        }
    }
...
</script>
~~~

## 课程文件

https://gitee.com/komavideo/LearnVueJS2

## 小马视频频道

http://komavideo.com

## Vue.js基础讲解

http://komavideo.com/vuejs/index.html