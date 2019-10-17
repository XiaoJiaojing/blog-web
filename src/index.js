// 入口文件
import Vue from 'vue'

import VueRouter from 'vue-router'

import {markdown} from 'markdown';

Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'

import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'bootstrap/dist/js/bootstrap.js'

import 'font-awesome/css/font-awesome.css'

import 'github-markdown-css/github-markdown.css'

import router from './router.js'

import app from './App.vue'


new Vue({
    el: '#app',
    render: c => c(app),
    router
})