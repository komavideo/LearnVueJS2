URL重定向
=========

## 知识点

* 重定向指令：redirect
* 路由别名：alias

## 实战演习

* About.vue
* router/index.js
* App.vue

### About.vue

~~~html
<template>
    <div>
        <h1>About Page</h1>
    </div>
</template>
~~~

### router/index.js

~~~js
import About from '@/components/About'
...
    {
        path: '/about',
        name: 'About',
        component: About,
        alias: '/aboutme'
    },
    {
        path: '/curry',
        redirect: '/player/1'
        //redirect: { name: 'About' }
        //redirect: '/about'
    }
~~~

### App.vue

~~~html
<template>
    <div id="app">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/player/1">Player1</router-link>
        <router-link to="/curry">Curry</router-link>
        <hr>
        <router-view></router-view>
    </div>
</template>
~~~

## 课程文件

https://gitee.com/komavideo/LearnVueJS2

## 小马视频频道

http://komavideo.com
