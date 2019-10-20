<template>
    <div>
        <div v-html="msg" class="markdown-body"></div>
    </div>
</template>

<script>
    import marked from 'marked'
    import hljs from 'highlight.js'
    import 'github-markdown-css/github-markdown.css'
    import 'highlight.js/styles/github.css';
    import 'highlight.js/styles/atom-one-light.css';

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

    export default {
        data() {
            return {
                id: this.$route.params.id,
                msg: ''
            }
        },
        created() {
            this.getMore()
        },
        methods: {
            getMore() {
                console.log(this.id)
                this.$http.get('/home/detail/?_id=' + this.id).then(result => {
                    this.msg = marked(result.body.msg[0].file, {sanitize: true})
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>