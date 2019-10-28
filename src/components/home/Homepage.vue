<template>
    <div>
        <router-view></router-view>
        <div>
            <div class="content" v-for="item in articlelist" :key="item._id">
                <h2 v-html="item.title"></h2>
                <MarkParse :content="item.abstract"></MarkParse>


                <router-link :to="'/home/more/'+item._id" class="luyou">
                    <span>阅读更多</span>
                    <span class="fa fa-angle-double-right"></span>
                </router-link>
            </div>
            <a href="#" @click="getNext" class="next" v-if="more">下一页
                <span class="fa fa-angle-double-right"></span>
            </a>
            <div v-if="!more" class="noMore">
                没有更多
            </div>

        </div>
    </div>

</template>

<script>
    import MarkParse from '../subComponents/MarkParse.vue'

    export default {
        data() {
            return {
                articlelist: [],
                tagId: this.$route.params.tagId,
                page: 1,
                pageSize:4,
                more: true,
            }
        },
        created() {
            this.getArticlelist()
        },
        methods: {
            getArticlelist() {
                // 根据 page 获取数据 渲染页面

                var paramsObj = {page:this.page,pageSize:this.pageSize,tagId: this.tagId}


                this.$http.get('/api/articles',{params:paramsObj}).then(result=>{
                    // console.log(result.body)
                    this.articlelist = result.body.data
                    this.more = result.body.more

                })
            },
            getNext() {
                // 点击的时候  page+1 重新请求数据
                this.page++
                this.getArticlelist()
            }
        },
        watch: {
            '$route'(to, from) {
                this.tagId = ''
                this.getArticlelist()
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
        margin-right: 30px;
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
        .noMore {
            font-size: 20px;
            color: #2489CC;
            text-align: center;
            margin-top: 20px;
        }
    }

</style>