<template>
    <div>
        <h3>标签</h3>
        <ul>
            <li v-for="item in tags" class="content">
                <button class="mybtn">
                    <router-link :to="'/home/tag/'+item.name">
                        {{item.name}}
                    </router-link>
                </button>
            </li>
        </ul>

        <div class="xjj">
            <p>©2019 - 肖娇静的学习笔记 </p>
            <p>Powered by  Vue2  &  Node</p>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                tags:[],
                flag: true
            }
        },
        created () {
            this.getAll()
        },
        methods: {
            getAll () {
                this.$http.get('/api/tags/all').then(result=>{
                    this.tags = result.body.data
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @media (max-width: 768px) {
        .content {
            padding: 10px;
            margin-bottom: 10px;
        }
    }
    h3 {
        font-size: 32px;
        font-weight: 300;
        margin-bottom: 20px;
        color: #2479CC;
    }

    ul {
        overflow: hidden;
        padding: 0;
        list-style-type: none;
        margin-bottom: 20px;
    }
    .content {
        float: left;
        margin-right: 20px;
    }
    .mybtn{
        padding-left: 10px;
        padding-right: 10px;
        height: 40px;
        line-height: 40px;
        border: 1px solid rgba(36,121,204,.8);

        font-size: 14px;
        border-radius: 6px;
    }
    a {
        color: #2489CC;
        text-decoration: none;
    }
    .xjj {
        border-top: 1px solid #ddd;
        color: #666666;
        text-align: center;
        p {
            margin-top: 15px;
        }
    }
</style>