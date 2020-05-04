<template>
    <div id="means">
        <div class="bg">
            <img src="../assets/images/9.jpg">
        </div>
        <div class="topbar">
            <div class="nav">
                <div class="back" @click="back">
                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                </div>
                <div class="end"></div>
                <router-link v-if="this.tip === 1 || this.id == 1" tag="div" :to="`/means/userdetails/${this.id}`" class="me">
                    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                </router-link>
            </div>
        </div>
        <div class="data" v-if="!show">
            <div class="top">
                <div class="top-img">
                    <img src="../assets/images/9.jpg">
                    <i class="fa fa-venus" aria-hidden="true"></i>
                </div>
            </div>
        </div>
        <div class="sign" v-if="!show">
            <div class="name">
                <span>{{user.name}}</span>
            </div>
            <div class="user">
                <span>Chat:{{user.user}}</span>
            </div>
            <div class="sentence">
                <span>
                   {{user.intr}}
                </span>
            </div>
        </div>
        <div class="add-friend">
            <a @click.prevent="Eject" v-if="id != 1 && this.tip === 0">加为好友</a>
            <a @click.prevent="Chat" v-else-if="id != 1 && this.tip === 1">发消息</a>
        </div>
        <transition class="fade" name="fade">
            <div class="add-misg" v-if="show">
                <div class="icon">
                    <img src="../assets/images/9.jpg">
                </div>
                <div class="name">
                    <span>带带大师兄</span>
                </div>
                <textarea class="add" :value="myname+'请求加为好友~'" maxlength="120"></textarea>
            </div>
        </transition>
        <transition class="made" name="made">
            <div class="btn" v-if="show">
                <a class="close" @click.prevent="Eject">取消</a>
                <a class="send" href="">发送</a>
            </div>
        </transition>
    </div>
</template>

<script>
import data from '../assets/js/data.js'
export default {
    props:{
        id:{
            required:true
        }
    },
    data(){
        return{
            myname:'十二',
            tip:0,
            user:{
                name:'带带大师兄',
                user:'5831261',
                intr:' 一日三餐没烦恼,今天就吃老八秘制小汉堡🍔,既实惠,还管饱,臭豆腐,腐乳,加柠檬,你看这🍔做的行不行。',
            },
            show:false
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        Eject:function(){
            this.show = !this.show
        },
        Chat:function(){
            this.$router.push({path: `/char/${this.id}`})
        },
        isFriend:function(){
            let tip = 0
            let arr = data.isFriend()
            arr.forEach(v=>{
                if(v.firend == this.id){
                    tip = 1;
                }
            })
            this.tip = tip
            // console.log(tip)
        }
    },
    mounted(){
        this.isFriend()
    }
}
</script>

<style scoped>
@import '../assets/css/means.css';
</style>