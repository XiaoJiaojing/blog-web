<template>
    <div class="content">
        <!-- 顶部区域  仅在超小屏可见-->
        <div class="top baseStyle">
           <span class="fa fa-bars" @click="xianshi" ref="topbar"></span>
           <p>肖娇静的小站</p>
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
    methods: {
        xianshi () {
            // 超小屏时，字体图标的转换
            if(this.$refs.topbar.className === 'fa fa-bars'){
                this.$refs.topbar.className = 'fa fa-close'
            } else if(this.$refs.topbar.className = 'fa fa-close'){
                this.$refs.topbar.className = ('fa fa-bars')
            }
            // 超小屏的导航栏显示与隐藏
            if(this.$refs.leftnav.style.display === ''){
                this.$refs.leftnav.style.display ='block'
                this.$refs.conright.style.marginLeft = '250px'
                this.$refs.topbar.style.marginLeft = '250px'
            } else if (this.$refs.leftnav.style.display === 'block'){
                this.$refs.leftnav.style.display =''
                this.$refs.conright.style.marginLeft = ''
                this.$refs.topbar.style.marginLeft = ''

            }
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
        text-align: center;
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
            span {
                font-size: 24px;
                float: left;
                padding-left: 10px;
                padding-top: 13px;
            }
            width: 100%;
            height: 50px;
            background-color: grey;
            line-height: 50px;

        }
        .left {
            display: none;
            h5 {
                display: block;
            }
            width: 250px;

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
                width: 90px;
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
            }
            .right {
                margin-left: 300px;
                padding-top: 50px;
            }
        }
    }

</style>