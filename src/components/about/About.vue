<template>
    <div>
      <h4>关于</h4>
       <p>整个博客使用 vue + node + webpack + mongodb 构建的</p>
       <p>还有很多未完善的功能，后期会不断修改和维护</p>

       <h4>功能实现</h4>
        <h5>前端</h5>
        <p>使用 vue 和 webpack 打包构建页面</p>
        <p>通过 vue 组件化 和 路由哈希的变化制作单页面</p>
        <p>使用媒体查询 进行响应式页面的设计</p>
        <p>使用了marked.js 以及代码高亮的 hightligh.js 将markdown字符串转为有样式的文章</p>
        <h5>后端</h5>
        <p>使用mongodb 数据库存储数据</p>
        <p>使用 node 进行路由设计 给前端提供数据接口</p>

        <h5>后台</h5>
        <p>显示总体的数据 提供上传文件的接口</p>

        <h5>请求</h5>
        <p>跨域请求通过设置代理实现</p>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    h4 {
        font-size: 32px;
        color: #2479CC;
        font-weight: 300;
        margin-bottom: 20px;
    }
    h5 {
        font-weight: 300;
        color: #2489CC;
    }
    p {
        margin: 10px 0 15px 0;
        color: #666666;
    }
</style>