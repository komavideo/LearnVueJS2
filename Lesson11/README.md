路由初体验
==========

## 知识点

* 做一个简单的路由

## 实战演习

* HelloWorld.vue
* News.vue
* About.vue
* router/index.js
* App.vue

### HelloWorld.vue

~~~html
<template>
    <div>
        <h1>Hello World!</h1>
    </div>
</template>
~~~

### News.vue

~~~html
<template>
    <div>
        <h1>News Page</h1>
    </div>
</template>
~~~

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
import News from '@/components/News'
...
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/news',
        name: 'News',
        component: News
    }
~~~

### App.vue

~~~html
<template>
    <div id="app">
        <img src="./assets/logo.png">
        <p>
            <!-- 使用 router-link 组件来导航. -->
            <!-- 通过传入 `to` 属性指定链接. -->
            <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
            <router-link to="/">Home</router-link>
            <router-link to="/news">新闻</router-link>
            <router-link to="/about">关于</router-link>
        </p>
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view/>
    </div>
</template>
~~~

## 课程文件

https://gitee.com/komavideo/LearnVueJS2

## 小马视频频道

http://komavideo.com
