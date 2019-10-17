<template>
    <div>
        <h3>JavaScript 数据结构</h3>
        <p>数据结构是我们学习的基础</p> <br>
        <p>学好数据结构可以让我们走的更长远</p><br>

        <p v-html="msg"></p>
        <a>阅读更多</a>



    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg:''
            }
        },
        created () {
            this.getDocument()
        },
        methods: {
            getDocument () {
                this.$http.get('/home').then(result=>{
                    console.log(result.body.msg)
                    this.msg = result.body.msg
                })
            }
        }
    }
</script>


<style lang="scss" scoped>

</style>