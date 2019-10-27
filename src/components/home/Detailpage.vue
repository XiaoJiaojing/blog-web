<template>
    <div>
        <MarkParse :content="articalContent"></MarkParse>
    </div>
</template>

<script>

    import MarkParse from '../subComponents/MarkParse.vue'

    export default {
        data() {
            return {
                id: this.$route.params.id,
                articalContent: ''
            }
        },
        created() {
            this.getMore()
        },
        methods: {
            getMore: function () {
                this.$http.get('api/article/detail?_id=' + this.id).then(result => {
                    this.articalContent = result.body.data[0].file
                    console.log(result.body)
                })
            }
        },
        components: {
            MarkParse
        }
    }
</script>

<style lang="scss" scoped>

</style>