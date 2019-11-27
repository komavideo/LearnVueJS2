动态路由
========

## 知识点

动态路由是指在URL路径中含有动态参数的路由，比如说：/player/1, /player/2, /player/3等等。

* 动态路由的匹配设置

## 实战演习

定制玩家的动态路径：/player/:id

* Player.vue
* router/index.js
* App.vue

### Player.vue

~~~html
<template>
    <div>
        <h1>球员页面</h1>
        <p>{{ detail }}</p>
    </div>
</template>

<script>
    export default {
        name: "Player",
        data() {
            return {
                detail: {}
            };
        },
        mounted() {
            // 接受url参数id
            this.detail = this.getPlayer(this.$route.params.uid);
        },
        /*
        beforeRouteUpdate(to, from, next) {
            this.detail = this.getPlayer(to.params.uid);
            next();
        },
        */
        methods: {
            getPlayer(uid) {
                switch (uid) {
                    case '1':
                        return {uid: 1,name: '库里',point: 26};
                    case '2':
                        return {uid: 2,name: '哈登',point: 30};
                    default:
                        return {uid: -1};
                }
            }
        }
    };
</script>
~~~

### router/index.js

~~~js
...
import Player from '@/components/Player'
...
export default new Router({
    routes: [
        {
            path: '/player/:uid',
            name: 'Player',
            component: Player
        }
    ]
})
~~~

### App.vue

~~~html
<template>
    <div id="app">
        <p>
            <router-link to="/">Home</router-link>
            <router-link to="/player/1">库里</router-link>
            <router-link to="/player/2">哈登</router-link>
        </p>
        <router-view/>
    </div>
</template>
~~~

## 课程文件

https://gitee.com/komavideo/LearnVueJS2

## 小马视频频道

http://komavideo.com
