<template>
    <div>
        <h3>JavaScript 数据结构</h3>
        <p>数据结构是我们学习的基础</p> <br>
        <p>学好数据结构可以让我们走的更长远</p><br>

        <p class="markdown-body" v-html="msg"></p>

        <a>阅读更多</a>


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
                msg: ''
            }
        },
        created() {
            this.getDocument()
        },
        methods: {
            getDocument() {
                this.$http.get('/home').then(result => {
                    console.log(result.body.msg)

                    this.msg = marked(result.body.msg, {
                        sanitize: true
                    });
                })
            }
        }
    }
</script>


<style lang="scss" scoped>
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