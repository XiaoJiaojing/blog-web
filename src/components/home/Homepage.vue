<template>
    <div>
        <div v-if="flag">
            <div class="content" v-for="item in msg" :key="item._id">
                <h2 v-html="item.title"></h2>
                <p v-html="item.abstract"></p>

                <router-view></router-view>
                <router-link :to="'/home/more/'+item._id">阅读更多
                    <span class="fa fa-angle-double-right"></span>
                </router-link>
                <hr>
            </div>
            <a href="#" @click="getNext" class="next">下一页
                <span class="fa fa-angle-double-right"></span>
            </a>
            <hr>
        </div>
        <h5 v-if="!flag">没有更多</h5>
    </div>

</template>

<script>
    import marked from 'marked'
    import hljs from 'highlight.js'

    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false,
        highlight(code) {
            return hljs.highlightAuto(code).value;
        }
    })

    export default {
        data() {
            return {
                msg: [],
                id:'',
                page:1,
                flag: true
            }
        },
        created() {
            this.getDocument()
        },
        methods: {
            getDocument() {
                this.$http.get('/home?page='+this.page).then(result => {
                    console.log(result)
                    if(result.body.err_code ==='200'){
                        this.msg = result.body.msg
                        this.msg.forEach(item=>{
                            item.abstract = marked(item.abstract,{sanitize: true})
                        })
                        if(!this.msg.length){
                            this.flag = false
                        }
                    }
                })
            },
            getNext () {
                this.page++
                this.getDocument()
            }
        }
    }
</script>


<style lang="scss" scoped>
    .content {

        h2 {
            font-weight: 400;
            color: #333;
        }
        p {
            color: #666;
            margin: 30px 0;
        }
        a,a:hover{
            color: #2489CC;
            cursor: pointer;
        }

        @media (max-width: 768px){
            .next {
                margin-left: 75%;
            }
        }
        @media (min-width:768px) {
            .next {
                margin-left: 90%;
            }
        }



    }
    .markdown-body {
        box-sizing: border-box;
        min-width: 200px;
        max-width: 980px;
        margin: 0 10px;
        padding: 45px 0px;
    }

    @media (max-width: 767px) {
        .markdown-body {
            padding: 15px;
        }
    }
    @import "../../../assets/css/atom-one-dark.min.css";
</style>