<template>
    <div>
        <div v-html="msg"></div>
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
        data () {
            return {
                id: this.$route.params.id,
                msg: ''
            }
        },
        created () {
            this.getMore()
        },
        methods: {
            getMore () {
                console.log(this.id)
                this.$http.get('/home/detail/?_id='+this.id).then(result=>{
                    this.msg = marked(result.body.msg[0].file,{sanitize: true})

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