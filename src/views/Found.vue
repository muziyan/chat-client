<template>
    <div id="found">
        <div class="nav">
            <div class="left">
                <span @click="back">取消</span>
            </div>
            <div class="mid">
                <span>创建群聊</span>
            </div>
            <div class="right">
                <span>占位</span>
            </div>
        </div>
        <div class="group">
            <div class="top">
                <div class="group-img">
                    <h5-cropper :option="option" @getbase64Data="getbase64Data"></h5-cropper>
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                    <img :src="groupAvatar" width="100" height="100">
                </div>
            </div>
            <div class="center">
                <input type="text" required placeholder="群名称">
            </div>
        </div>
        <div class="group-member">
            <h3 class="title">用户</h3>
            <ul class="member-list">
                <li class="member-item" @click="isCheck(index)" v-for="(items,index) in users" :key="index">
                    <div class="left">
                        <div class="check" :class="{active:items.check}">
                            <span><i class="fa fa-check" aria-hidden="true"></i></span>
                        </div>
                    </div>
                    <div class="mid">
                        <img :src="items.avatar" width="40" height="40">
                    </div>
                    <div class="right">
                        <span>{{items.username}}</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="footer">
            <a>创建({{this.sum}})</a>
        </div>
    </div>
</template>

<script>
import H5Cropper from "vue-cropper-h5";
export default {
    data(){
        return{
            groupAvatar:'/static/images/9.jpg',
            option:{},
            sum:0,
            users:[
                {
                    id:1,
                    avatar:'/static/images/1.jpg',
                    username:'哈批🐎',
                    check:false
                },
                {
                    id:2,
                    avatar:'/static/images/2.jpg',
                    username:'岛式老八',
                    check:false
                },
                {
                    id:3,
                    avatar:'/static/images/3.jpg',
                    username:'带带大师兄',
                    check:false
                },
                {
                    id:4,
                    avatar:'/static/images/4.jpg',
                    username:'金牌厨师',
                    check:false
                },
                {
                    id:5,
                    avatar:'/static/images/5.jpg',
                    username:'抽象带篮子',
                    check:false
                },
                {
                    id:6,
                    avatar:'/static/images/6.jpg',
                    username:'RNG污渍',
                    check:false
                },
                {
                    id:7,
                    avatar:'/static/images/7.jpg',
                    username:'退役辅助山泥若',
                    check:false
                },
                {
                    id:8,
                    avatar:'/static/images/8.jpg',
                    username:'斗鱼张顺飞',
                    check:false
                }
            ]
        }
    },
    components: {
      H5Cropper,
    },
    methods:{
        getbase64Data(data) {
            this.groupAvatar = data;
        },
        back(){
            this.$router.go(-1)
        },
        isCheck:function(e){
            this.users[e].check = !this.users[e].check
            this.total()
        },
        total:function(){
            var arr = this.users
            this.sum = 0
            arr.forEach(v=>{
                this.sum =this.sum + 1
                if(v.check == false){
                    this.sum = this.sum - 1
                }
            })
        }
    }
}
</script>

<style scoped>
@import '../assets/css/found.css';
</style>