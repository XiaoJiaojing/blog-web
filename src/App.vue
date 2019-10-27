<template>
    <div class="content">
        <!-- 顶部区域  仅在超小屏可见-->
        <Top></Top>

        <!--左侧导航栏-->
        <Leftnav ref="leftnav"></Leftnav>

        <!--右侧内容区域-->
        <div class="right" ref="conright" :show="contentMove">
            <router-view></router-view>

        </div>
    </div>
</template>


<script>
    import Top from './components/subComponents/Top.vue'
    import Leftnav from './components/subComponents/Leftnav.vue'
    export default {
    data () {
        return {
            show: false
        }
    },
     computed: {
        contentMove () {
            return this.show = this.$store.getters.getShowValue ? true:false

        }

    },
     watch: {
         show: function (newVal) {
             if(newVal){
                 this.$refs.conright.style.marginLeft = '150px'
             }else {
                 this.$refs.conright.style.marginLeft = ''
             }
         }
     },
    components: {
        Top,
        Leftnav
    }

}
</script>


<style lang="scss" scoped>
    /*以下是借用媒体查询写的响应式样式*/
    /*超小屏设备*/
    @media (max-width: 768px) {
        .right {
            padding-top: 70px;
            padding-left: 15px;
            padding-right: 15px;
        }
    }

    /*小屏设备*/
    @media (min-width: 768px) {
        .right {
            margin-left: 130px;
            padding-top: 20px;

        }
    }
    /*中屏以上设备*/
    @media (min-width: 992px) {
        .right {
            margin-left: 280px;
            padding-top: 20px;

        }
    }
</style>