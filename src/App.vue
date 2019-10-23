<template>
    <div class="content">
        <!-- 顶部区域  仅在超小屏可见-->
        <div class="top">
           <div class="fa fa-bars leftImg" @click="xianshi" ref="topbar"></div>
           <span class="title">肖娇静的小站</span>
           <span class="return" @click="upper">返回</span>

        </div>

        <!--左侧导航栏-->
        <div class="left baseStyle leftCommonStyle" ref="leftnav">
            <h5>肖娇静的博客</h5>
            <router-link class="supai" to="/home" >
                <span class="fa fa-home"></span>
                <span>首页</span>
            </router-link>
            <router-link class="supai" to="/tag">
                <span class="fa fa-tags"></span>
                <span>标签</span>
            </router-link>
            <router-link class="supai" to="/about">
                <span class="fa fa-bars"></span>
                <span>关于</span>
            </router-link>
            <router-link class="supai" to="/person">
                <span class="fa fa-user"></span>
                <span >个人</span>
            </router-link>
        </div>

        <!--右侧内容区域-->
        <div class="right" ref="conright">
            <router-view></router-view>

        </div>
    </div>
</template>


<script>
export default {
    data () {
        return {

        }
    },
    created () {
        this.upper()
    },
    methods: {
        xianshi () {
            // 超小屏时，字体图标的转换
            console.log(this.$refs.topbar.className)
            if(this.$refs.topbar.className === 'fa fa-bars leftImg'){
                this.$refs.topbar.className = 'fa fa-close leftImg'

            } else if(this.$refs.topbar.className === 'fa fa-close leftImg'){
                this.$refs.topbar.className = 'fa fa-bars leftImg'
            }
            //超小屏时，左侧导航栏的切换
            if(this.$refs.leftnav.style.display ===''){
                this.$refs.leftnav.style.display ='block'
                this.$refs.conright.style.marginLeft = '160px'
                this.$refs.topbar.style.marginLeft = '160px'
            } else if (this.$refs.leftnav.style.display ==='block'){
                this.$refs.leftnav.style.display =''
                this.$refs.conright.style.marginLeft = ''
                this.$refs.topbar.style.marginLeft = ''
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

    /*提取公共样式*/
    .baseStyle {
        position: fixed;
        color: #fff;
        text-align: center;
    }

    /*将左边导航栏的公共样式进行封装*/
    .leftCommonStyle{
        padding-top: 200px;
        height: 100%;
        background-color: dimgrey;
        float: left;
    }
    /*左侧导航栏每个li的排列样式*/
    .supai {
        display: block;
        width: 100%;
        height: 70px;
        line-height: 70px;
        color: #fff;
        text-decoration: none;
        .fa {
            margin-right: 10px;
        }
    }

    /*一下是借用媒体查询写的响应式样式*/
    /*超小屏设备*/
    @media (max-width: 768px) {
        .top {
            position: fixed;
            color: #fff;
            width: 100%;
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
        .left {
            display: none;
            h5 {
                display: block;
            }
            width: 150px;

        }
        .right {
            padding-top: 70px;
            padding-left: 15px;
            padding-right: 15px;
        }
    }
    /*小屏设备*/
    @media (min-width: 768px) {
        .top {
            display: none;
        }
        .content {
            .left {
                h5 {
                    display: none;
                }

                text-align: center;
                width: 100px;
            }
            .right {
                margin-left: 140px;
            }
        }
    }
    /*中屏以上设备*/
    @media (min-width: 992px) {
        .top {
            display: none;
        }
        .content {
            .left {
                h5 {
                    display: block;
                }
                width: 250px;
                margin-left: -20px;
            }
            .right {
                margin-left: 300px;
                padding-top: 50px;
            }
        }
    }

</style>