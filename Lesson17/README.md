多参数路由
==========

## 知识点

* 路由属性props

## 实战演习

* User.vue
* router/index.js
* App.vue

### User.vue

~~~html
<template>
    <div>
        <h1>User</h1>
        <p>uid={{ uid }}, {{ nationality }}</p>
        <p>$route.params.uid={{ $route.params.uid }}</p>
        <p>$route.params.uid={{ $route.params.nationality }}</p>
    </div>
</template>

<script>
    export default {
        name: "User",
        props: ['uid', 'nationality']
    };
</script>
~~~

### router/index.js

~~~js
import User from '@/components/User'
...
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/user/:uid/:nationality',
        name: 'User',
        component: User,
        props: true
    },
...
~~~

### App.vue

~~~html
<template>
    <div id="app">
        <router-link to="/">Home</router-link>
        <router-link to="/user/1/usa">User1</router-link>
        <router-link to="/user/2/china">User2</router-link>
        <router-link to="/user/3/korea">User3</router-link>
        <hr>
        <router-view></router-view>
    </div>
</template>
~~~

## 课程文件

https://gitee.com/komavideo/LearnVueJS2

## 小马视频频道

http://komavideo.com
