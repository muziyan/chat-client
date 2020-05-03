<template>
    <div id="search" class="main">
        <div class="search-container">
            <div class="search">
                <i class="fa fa-search" aria-hidden="true"></i>
                <input type="text" placeholder="搜索用户/群组" placeholder-style="color:#b0b3bf;" v-model="value" @input.prevent="search()">
                <span @click="back">取消</span>
            </div>
        </div>
        <div class="user-container">
            <h3 class="title" v-if="userarr.length>0">用户</h3>
            <ul class="user-list">
                <li class="user-item" v-for="(items,i) in userarr" :key="i">
                    <router-link tag="div" :to="`/means/${items.id}`" class="left">
                        <img :src="items.icon" width="48" height="48">
                    </router-link>
                    <div class="mid">
                        <p class="name" v-html="items.name"></p>
                        <p class="email" v-html="'Char:'+items.char"></p>
                    </div>
                    <div class="right">
                        <span class="send" v-if="items.tip==1">发消息</span>
                        <span class="add" v-if="items.tip==0">加好友</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="group-container">
            <h3 class="title">群组</h3>
            <ul class="group-list">
                <li class="group-item" v-for="n in 5" :key="n">
                    <div class="left">
                        <img src="../assets/images/9.jpg" width="48" height="48">
                    </div>
                    <div class="mid">
                        <p class="name">铜锣湾</p>
                    </div>
                    <div class="right">
                        <span class="send active">进入群</span>
                        <span class="add">加入群</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import data from '../assets/js/data.js'
export default {
    data(){
        return{
            userarr:[],
            value:'',
        }
    },
    methods:{
        //返回上一页
        back(){
            this.$router.go(-1)
        },
        //获取关键字
        search:function(){
            this.userarr = []
            let Svalue = this.value
            if(Svalue.length > 1){
                this.searchUser(Svalue)
            }
        },
        //匹配关键字用户
        searchUser:function(e){
            let arr = data.news()
            let exp = eval("/"+e+"/g")
            arr.forEach(v=>{
                let isName = v.name.indexOf(e)
                let isChar = v.char.indexOf(e)
                if(parseInt(isName) !== -1 || parseInt(isChar) !== -1){
                    this.isFriend(v)
                    v.name = v.name.replace(exp,"<span style='color:#3EBBE6;'>"+e+"</span>")
                    v.char = v.char.replace(exp,"<span style='color:#3EBBE6;'>"+e+"</span>")
                    this.userarr.push(v)
                }
            })
        },
        //判断是否为好友
        isFriend:function(e){
            let tip = 0
            let arr = data.isFriend()
            arr.forEach(v=>{
                if(v.firend == e.id){
                    tip = 1;
                }
            })
            e.tip = tip
            // console.log(tip)
        }
    }
}
</script>

<style scoped>
@import '../assets/css/search.css';
</style>