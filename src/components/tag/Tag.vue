<template>
    <div>
        <h3>标签</h3>
        <ul>
            <li v-for="item in msg" class="content">
                <button class="mybtn">
                    <router-link :to="'/tag/classify/'+item[0]">
                        {{item[0]}}
                        <span>({{item[1]}})</span>
                    </router-link>
                </button>
            </li>
        </ul>

        <hr>
        <div class="xjj">
            <p>©2019 - 肖娇静的学习笔记 </p>
            <p>Powered by  Vue2  &  Node</p>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg:[],
                flag: true
            }
        },
        created () {
            this.getAll()
        },
        methods: {
            getAll () {
                this.$http.get('/all').then(result=>{
                    var ret = result.body.msg
                    var obj = {}
                    var count = 1
                    for(var i=0;i<ret.length;i++){
                        var tags = ret[i].tag
                        if(obj[tags]){
                            obj[tags] += count
                        }else {
                            obj[tags] = 1
                        }
                    }
                    var arr = []
                    for(var key in obj){
                        if(obj.hasOwnProperty(key)){
                            var arr1 = []
                            arr1.push(key)
                            arr1.push(obj[key])
                            arr.push(arr1)
                        }
                    }
                   this.msg = arr
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @media (max-width: 768px) {
        .content {
            padding: 10px;
            margin-bottom: 10px;
        }
    }
    h3 {
        font-size: 32px;
        font-weight: 300;
        margin-bottom: 20px;
        color: #2479CC;
    }
    hr {
        margin-bottom: 20px;
    }
    ul {
        overflow: hidden;
        padding: 0;
        list-style-type: none;
        margin-bottom: 20px;
    }
    .content {
        float: left;
        margin-right: 20px;
    }
    .mybtn{
        padding-left: 10px;
        padding-right: 10px;
        height: 40px;
        line-height: 40px;
        border: 1px solid rgba(36,121,204,.8);

        font-size: 14px;
        border-radius: 6px;
    }
    a {
        color: #2489CC;
        text-decoration: none;
    }
    .xjj {
        color: #666666;
        text-align: center;
        p {
            margin-top: 15px;
        }
    }
</style>