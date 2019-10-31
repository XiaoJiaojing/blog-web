<template>
    <div>
        <div class="markdown-body" v-html="compiledMarkdown"></div>
    </div>

</template>

<script>
    // 这个组件的作用是将markdown字符串转换成 成看的 markdown 且有代码高亮
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
        highlight (code) {
            return hljs.highlightAuto(code).value;
        }
    });

    export default {
        data () {
            return {

            }
        },
        props: {
            content: {
                type: String,
                default: ''
            }
        },
        computed: {
            compiledMarkdown () {
                return marked(this.content, {
                    sanitize: true
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>