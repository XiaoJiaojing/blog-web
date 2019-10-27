<template>
    <div class="top" ref="topbar">
        <div class="fa fa-bars leftImg" @click="show" ref="topImg"></div>
        <span class="title">肖娇静的小站</span>
        <span class="return" @click="upper">返回</span>
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        },
        methods: {
            // 点击，显示和隐藏左侧的导航栏 以及字体图标的转换
            show () {
                // 字体图标的转换
                if(this.$refs.topImg.className === 'fa fa-bars leftImg'){
                    this.$refs.topImg.className = 'fa fa-close leftImg'
                    this.$refs.topbar.style.marginLeft = '150px'
                    this.$store.commit('changeShowValue',true)

                } else if(this.$refs.topImg.className === 'fa fa-close leftImg'){
                    this.$refs.topImg.className = 'fa fa-bars leftImg'
                    this.$refs.topbar.style.marginLeft = ''
                    this.$store.commit('changeShowValue',false)
                }

            },
            upper () {
                //返回上一层
                this.$router.go(-1)
            }
        }
    }

</script>


<style lang="scss" scoped>

    @media (max-width: 768px) {
        .top {
            text-align: center;
            width: 100%;
            position: fixed;
            color: #fff;
            height: 50px;
            background-color: grey;
            line-height: 50px;
            font-size: 18px;
            .leftImg {
                float: left;
                margin-left: 10px;
                margin-top: 13px;
            }
            .title {
            }
            .return {
                float: right;
                margin-right: 10px;
            }
        }

    }
    @media (min-width: 768px) {
        .top {
            display: none;
        }

    }
    @media (min-width: 992px) {
        .top {
            display: none;
        }
    }
</style>