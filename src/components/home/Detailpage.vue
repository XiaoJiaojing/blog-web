<template>
    <div>
        <div v-html="msg" class="markdown-body"></div>

    </div>
</template>

<script>
    import marked from 'marked'
    import hljs from 'highlight.js'
    import 'github-markdown-css/github-markdown.css'
    import 'highlight.js/styles/darcula.css'

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
                this.$http.get('/home/detail?_id=' + this.id).then(result => {
                    this.msg = marked(result.body.msg[0].file, {sanitize: true})

                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>