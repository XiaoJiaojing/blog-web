// 入口文件
import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import VueResource from 'vue-resource'

Vue.use(VueResource)

import router from './router.js'

import app from './App.vue'


new Vue({
    el: '#app',
    render: c => c(app),
    router
})