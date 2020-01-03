<template>
    <div id="app">
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
    </div>
</template>

<script>
    import './assets/my.css'
    export default {
        name: 'App',
    }
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>