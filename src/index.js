// 入口文件
import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import VueResource from 'vue-resource'

Vue.use(VueResource)

import 'bootstrap/dist/css/bootstrap.css'

import 'font-awesome/css/font-awesome.css'

import marked from 'marked'

marked.setOptions({
    renderer: new marked.Renderer(),
    xhtml: false,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
        return hljs.highlightAuto(code).value;
    }
});

import hljs from 'highlight.js'
import 'highlight.js/styles/darcula.css'

import 'github-markdown-css/github-markdown.css'

import router from './router.js'

import app from './App.vue'


new Vue({
    el: '#app',
    render: c => c(app),
    router
})