import VueRouter from 'vue-router'

import Homepage from './components/home/Homepage.vue'
import Tag from './components/tag/Tag.vue'
import About from './components/about/About.vue'
import Person from './components/person/Person.vue'
var router = new VueRouter({
    routes: [
        {path:'/',redirect:'/home'},
        {path:'/home',component:Homepage},
        {path:'/tag',component:Tag},
        {path:'/about',component:About},
        {path:'/person',component:Person}

    ]
})


export default router