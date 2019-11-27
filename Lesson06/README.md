使用Ajax库-axios
================

## 知识点

* 为网页增加远程数据存取能力（Ajax）
* HTTP库axios（浏览器 or Node.js）

### axios:Promise based HTTP client for the browser and node.js

https://github.com/axios/axios

## 实战演习

~~~bash
$ cd myweb
$ npm install --save --save-exact axios vue-axios
#注册组件
$ nano main.js
...
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
...
#各个组件
$ nano HelloWorld.vue
...
<pre>{{content}}</pre>
...
export default {
  name: "HelloWorld",
  data() {
    return {
      content: ""
    };
  },
  mounted() {
    this.axios.post("http://api.komavideo.com/news/list").then(body => {
      this.content = body.data;
    });
  }
};
...
~~~

### VS Code workspace setting

纠正VSCode-vetur插件的4空格格式化问题

~~~json
{
    "prettier.tabWidth": 4
}
~~~

## 课程文件

https://gitee.com/komavideo/LearnVueJS2

## 小马视频频道

http://komavideo.com
