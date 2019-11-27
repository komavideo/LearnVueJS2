多路由拼图
==========

## 知识点

为一个路由(画面)组合多个组件，完成整个页面。

* router-view[name]
* components

## 实战演习

* Header.vue
* Sidebar.vue
* Detail.vue
* router/index.js
* App.vue

### setting/Header.vue

~~~html
<template>
    <div>
        <h1>标题栏</h1>
        <div>欢迎来到小马Vue.js课程系列</div>
    </div>
</template>
~~~

### setting/Sidebar.vue

~~~html
<template>
    <div>
        <h1>边条</h1>
    </div>
</template>
~~~

### setting/Detail.vue

~~~html
<template>
    <div>
        <h1>详细显示</h1>
        <p>Vue.js是一套用于构建用户界面的渐进式框架。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</p>
    </div>
</template>
~~~

### router/index.js

~~~js
import SettingDetail from '@/components/setting/Detail'
import SettingHeader from '@/components/setting/Header'
import SettingSidebar from '@/components/setting/Sidebar'
...
    routes: [
        {
            path: '/',
            name: 'Home',
            components: {
                myHeader: SettingHeader,
                mySidebar: SettingSidebar,
                myDetail: SettingDetail
            }
        }
    ]
~~~

### App.vue

~~~html
<template>
    <div id="app">
        <table width="100%">
            <tr>
                <td colspan="2" style="background-color:darkgoldenrod">
                    <router-view name="myHeader"></router-view>
                </td>
            </tr>
            <tr>
                <td width="20%" style="background-color:thistle">
                    <router-view name="mySidebar"></router-view>
                </td>
                <td width="80%" style="background-color:aquamarine">
                    <router-view name="myDetail"></router-view>
                </td>
            </tr>
        </table>
    </div>
</template>
~~~

## 课程文件

https://gitee.com/komavideo/LearnVueJS2

## 小马视频频道

http://komavideo.com
