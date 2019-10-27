<template>
    <div>
        <router-view></router-view>
        <div v-if="more">
            <div class="content" v-for="item in msg" :key="item._id">
                <h2 v-html="item.title"></h2>
                <MarkParse :content="item.abstract"></MarkParse>


                <router-link :to="'/home/more/'+item._id" class="luyou">
                    <span>阅读更多</span>
                    <span class="fa fa-angle-double-right"></span>
                </router-link>

            </div>
            <a href="#" @click="getNext" class="next">下一页
                <span class="fa fa-angle-double-right"></span>
            </a>

        </div>
        <h5 v-if="!more">没有更多</h5>
    </div>

</template>

<script>
    import MarkParse from '../subComponents/MarkParse.vue'

    export default {
        data() {
            return {
                msg: [],
                id: '',
                tagName: this.$route.params.tagName,
                page: 1,
                more: true
            }
        },
        created() {
            this.getDocument()
        },
        methods: {
            getDocument() {
                // 根据 page 获取数据 渲染页面
                var suff = this.tagName ? '&tag=' + this.tagName : ''
                this.$http.get('/api/articles?page=' + this.page + suff).then(result => {
                    this.msg = result.body.data
                    this.more = result.body.more

                })
            },
            getNext() {
                // 点击的时候  page+1 重新请求数据
                this.page++
                this.getDocument()
            }
        },
        watch: {
            '$route'(to, from) {
                if (this.$route.params.tagName) {

                }
                this.getDocument();
                console.log("..." + this.$route.params)
            }
        },
        components: {
            MarkParse
        }
    }
</script>


<style lang="scss" scoped>
    .content {
        border-bottom: 1px solid #ddd;

        h2 {
            margin-bottom: 20px;
            margin-top: 20px;
            font-weight: 400;
            color: #333;
        }

        hr {
            margin: 20px 0;
            background-color: #ddd;
            border-width: 1px;

        }

        p {
            color: #666;
        }

        .luyou {
            display: block;
            padding-top: 20px;
            padding-bottom: 20px;

        }

        a, a:hover {
            color: #2489CC;
            cursor: pointer;
            text-decoration: none;
        }

        .next {
            padding-top: 20px;
            padding-bottom: 20px;
            display: block;
        }

        @media (max-width: 768px) {
            .next {

                margin-left: 80%;

            }
        }
        @media (min-width: 768px) {
            .next {
                margin-left: 90%;

            }
        }

        h5 {
            color: #2489CC;
        }
    }

</style>