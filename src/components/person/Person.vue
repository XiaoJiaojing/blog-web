<template>
    <div>
        <h4>个人介绍</h4>
        <p>这里的博客都是个人学习中的笔记</p>
        <p>联系邮箱：13098805730@163.com</p>
        <a href="https://github.com/XiaoJiaojing">我的gitHub</a>


        <div class="xjj">
            <p>©2019 - 肖娇静的学习笔记 </p>
            <p>Powered by  Vue2  &  Node</p>
        </div>

    </div>
</template>

<script>
    import Marked from '../subComponents/MarkParse.vue'
    export default {
        data () {
            return {

            }
        }
    }
</script>

<style class="scss" scoped>

    h4 {
        font-size: 28px;
        font-weight: 300;
        color: #2479cc;
        margin-bottom: 30px;
    }
    p {
        margin-bottom: 15px;
        color: #666666;
    }
    a {
        text-decoration: none;
        color: #2489CC;
    }

    .xjj {
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid #ddd;
        text-align: center;
    }

</style>