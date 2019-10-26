<template>
    <div>
        <router-view></router-view>
        <div v-if="more">
            <div class="content" v-for="item in msg" :key="item._id">
                <h2 v-html="item.title"></h2>
                <Marked :markStr="item.abstract"></Marked>


                <router-link :to="'/home/more/'+item._id" class="luyou">
                    <span>阅读更多</span>
                    <span class="fa fa-angle-double-right"></span>
                </router-link>
                <hr>
            </div>
            <a href="#" @click="getNext" class="next">下一页
                <span class="fa fa-angle-double-right"></span>
            </a>
            <hr>
        </div>
        <h5 v-if="!more">没有更多</h5>
    </div>

</template>

<script>
    import Marked from '../subComponents/Marked.vue'
    export default {
        data() {
            return {
                msg: [],
                id: '',
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
                this.$http.get('/home?page=' + this.page).then(result => {
                    if (result.body.err_code === '200') {
                        this.msg = result.body.msg
                        if (!this.msg.length) {
                            this.more = false
                        }
                    }
                })
            },
            getNext() {
                // 点击的时候  page+1 重新请求数据
                this.page++
                this.getDocument()
            }
        },
        components: {
            Marked
        }
    }
</script>


<style lang="scss" scoped>
    .content {

        h2 {
            margin-bottom: 20px;
            font-weight: 400;
            color: #333;
        }
        hr {
            margin: 20px 0;
            background-color: #eee;
        }

        p {
            color: #666;
        }
        .luyou {
            display: block;
            padding-top: 20px;

        }
        a, a:hover {
            color: #2489CC;
            cursor: pointer;
            text-decoration: none;
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
            color: #2489CC;
        }
    }

</style>