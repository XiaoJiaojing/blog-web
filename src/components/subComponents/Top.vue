<template>
    <div class="top">
        <div class="fa fa-bars leftImg" @click="show" ref="topbar"></div>
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
                if(this.$refs.topbar.className === 'fa fa-bars leftImg'){
                    this.$refs.topbar.className = 'fa fa-close leftImg'

                } else if(this.$refs.topbar.className === 'fa fa-close leftImg'){
                    this.$refs.topbar.className = 'fa fa-bars leftImg'
                }

                // console.log(this.$refs.leftnav)
                // // 左侧导航栏的切换
                // if(this.$refs.leftnav.style.display ===''){
                //     this.$refs.leftnav.style.display ='block'
                //     this.$refs.conright.style.marginLeft = '160px'
                //     this.$refs.topbar.style.marginLeft = '160px'
                // } else if (this.$refs.leftnav.style.display ==='block'){
                //     this.$refs.leftnav.style.display =''
                //     this.$refs.conright.style.marginLeft = ''
                //     this.$refs.topbar.style.marginLeft = ''
                // }

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
                margin-left: 22%;
            }
            .return {
                margin-left: 25%;
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