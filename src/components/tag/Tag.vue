<template>
    <div>
        <h3>标签</h3>
        <ul>
            <li v-for="item in msg" class="content">
                <button class="mybtn">
                    <a href="#">
                        {{item[0]}}
                        <span>({{item[1]}})</span>
                    </a>
                </button>
            </li>
        </ul>

        <hr>
        <div class="xjj">
            <p>©2019 - 肖娇静的小站 </p>
            <p>Powered by  Vue2  &  Node</p>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg:[]
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
                    console.log(obj)


                    var arr = []
                    for(var key in obj){
                        if(obj.hasOwnProperty(key)){
                            // var newObj = {}
                            // newObj[key] = obj[key]
                            // arr.push(newObj)
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

<style class="scss" scoped>
    h3 {
        font-size: 32px;
        font-weight: 400;
        margin-bottom: 20px;
        color: #333333;
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

        height: 40px;
        line-height: 40px;
        border: 1px solid rgba(36,121,204,.8);
        color: rgba(36,121,204,.8);
        font-size: 14px;
        border-radius: 6px;
    }
    a {
        text-decoration: none;
    }
    .xjj {
        color: #666666;
        text-align: center;
    }
</style>