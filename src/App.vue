<template>
    <div class="content">
        <div class="top">
           <span class="fa fa-bars" @click="xianshi" ref="topbar"></span>
           <p>肖娇静的小站</p>
        </div>

        <!--左侧导航栏-->
        <div class="left" ref="leftnav">



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
            console.log(this.$refs.leftnav.style)
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
    @media (max-width: 768px) {
        .top {
            span {
                font-size: 24px;
                float: left;
                padding-left: 10px;
                padding-top: 13px;
            }
            position: fixed;
            color: #fff;
            width: 100%;
            height: 50px;
            background-color: grey;
            text-align: center;
            line-height: 50px;

        }
        .left {
            display: none;
            h5 {
                display: block;
            }
            position: fixed;
            color: #fff;
            padding-top: 200px;
            width: 250px;
            height: 100%;
            background-color: dimgrey;
            float: left;
            text-align: center;
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

        }
        .right {
            padding-top: 50px;
        }
    }
    @media (min-width: 768px) {
        .top {
            display: none;

        }
        .content {
            .left {
                h5 {
                    display: none;
                }
                position: fixed;
                color: #fff;
                padding-top: 200px;
                width: 90px;
                height: 100%;
                background-color: dimgrey;
                float: left;
                text-align: center;
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
            }
            .right {
                margin-left: 90px;
            }

        }
    }
    @media (min-width: 992px) {
        .top {
            display: none;
        }
        .content {
            .left {
                h5 {
                    display: block;
                }
                position: fixed;
                color: #fff;
                padding-top: 200px;
                width: 250px;
                height: 100%;
                background-color: dimgrey;
                float: left;
                text-align: center;
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
            }
            .right {
                margin-left: 250px;
            }
        }
    }


</style>