嵌套路由
========

## 知识点

嵌套路由是指在动态路由的基础上再加上附加的嵌套URL（即：组件），比如说：(/player/:uid/*)/player/1/profile, /player/1/stats等。

* 嵌套路由的使用方法

## 实战演习

* Player/Profile.vue
* Player/Stats.vue
* router/index.js
* Player.vue

### Player/Profile.vue

~~~html
<template>
    <div>
        <h2>球员简介:{{$route.params.uid}}</h2>
    </div>
</template>
~~~

### Player/Stats.vue

~~~html
<template>
    <div>
        <h2>球员数据:{{$route.params.uid}}</h2>
    </div>
</template>
~~~

### router/index.js

~~~js
import PlayerProfile from '@/components/Player/Profile'
import PlayerStats from '@/components/Player/Stats'
...
    {
        path: '/player/:uid',
        name: 'Player',
        component: Player,
        children: [
            {
                path: 'profile',
                component: PlayerProfile
            },
            {
                path: 'stats',
                component: PlayerStats
            },
        ]
    }
~~~

### Player.vue

~~~html
<template>
    <div>
        <h1>球员页面</h1>
        <ul>
            <li>编号：{{detail.uid}}</li>
            <li>名字：{{detail.name}}</li>
            <li>得分：{{detail.point}}</li>
        </ul>
        <router-link :to="profile">简介</router-link>
        <router-link :to="stats">数据</router-link>
        <hr>
        <router-view></router-view>
    </div>
</template>
...
<script>
...
    data() {
        return {
            detail: {},
            profile: '',
            stats: '',
        };
    },
    mounted() {
        this.detail = this.getPlayer(this.$route.params.uid);
        this.profile = '/player/' + this.$route.params.uid + '/profile';
        this.stats = '/player/' + this.$route.params.uid + '/stats';
    },
    beforeRouteUpdate(to, from, next) {
        this.detail = this.getPlayer(to.params.uid);
        this.profile = '/player/' + to.params.uid + '/profile';
        this.stats = '/player/' + to.params.uid + '/stats';
        next();
    },
...
</script>
~~~

## 课程文件

https://gitee.com/komavideo/LearnVueJS2

## 小马视频频道

http://komavideo.com
