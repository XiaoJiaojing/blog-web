<template>
    <div class="left baseStyle leftCommonStyle" ref="leftnav" :show="getShow">
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

</template>

<script>
    import 'font-awesome/css/font-awesome.css'
    export default {
        data () {
            return {
                show: false
            }
        },

        computed: {
            getShow () {
                return this.show = this.$store.getters.getShowValue ? true:false
            }
        },
        watch: {
            show: function (newVal) {
                if(newVal){
                    this.$refs.leftnav.style.display = 'block'
                }else {
                    this.$refs.leftnav.style.display = ''
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
        line-height: 70px;
        color: #fff;
        text-decoration: none;
        .fa {
            margin-right: 10px;
        }
    }
    /*超小屏设备*/
    @media (max-width: 768px) {
        .left {
            display: none;
            h5 {
                display: block;
            }
            width: 150px;
        }
    }
    /*小屏设备*/
    @media (min-width: 768px) {
        .content {
            .left {
                h5 {
                    display: none;
                }
                text-align: center;
                width: 100px;
            }

        }
    }
    /*中屏以上设备*/
    @media (min-width: 992px) {
        .content {
            .left {
                h5 {
                    display: block;
                    font-size: 18px;
                    font-weight: 300;
                }
                width: 250px;
            }
        }
    }
</style>