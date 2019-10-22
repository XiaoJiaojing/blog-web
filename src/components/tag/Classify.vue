<template>
    <div>
        <div v-if="flag">
            <div class="content" v-for="item in classifyPage" :key="item._id">
                <h2 v-html="item.title"></h2>
                <p class="markdown-body" v-html="item.abstract"></p>

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
    import 'github-markdown-css/github-markdown.css'
    import 'highlight.js/styles/darcula.css'

    marked.setOptions({
        renderer: new marked.Renderer(),
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
    })

    export default {
        data () {
            return {
                tag: this.$route.params.tag,
                classifyPage: [],  //保存同类中一页的数据
                flag:true,
                pageLength:4,
                page:0
            }
        },
        created () {
            this.getClassify()
        },
        methods: {
            getClassify(){
                this.$http.get('/tag/classify?tag='+this.tag).then(result=>{
                    var arr = result.body.msg //拿到同类的所有数据
                    for(var i=0;i<arr.length;i++){
                        arr[i].page = Math.ceil((i+1)/4)  //重新进行分页设置
                        arr[i].abstract = marked(arr[i].abstract, {sanitize: true})
                    }
                    this.classifyPage = arr.splice(this.page,this.pageLength) //拿到第一页的同类数据
                    if(!this.classifyPage.length){
                        this.flag = false
                    }
                })
            },
            getNext() {
                this.page += this.pageLength
                console.log(this.page)
                this.getClassify()
            }

        }
    }
</script>

<style lang="scss" scoped>

        h2 {
            font-weight: 400;
            color: #333;
        }

        p {
            color: #666;
            margin: 30px 0;
        }

        a, a:hover {
            color: #2489CC;
            cursor: pointer;
        }

        @media (max-width: 768px) {
            .next {
                margin-left: 75%;
            }
        }
        @media (min-width: 768px) {
            .next {
                margin-left: 90%;
            }
        }
        h5 {
            padding: 20px;
            color: #2489CC;

        }


</style>