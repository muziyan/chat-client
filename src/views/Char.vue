<template>
    <div id="char" class="container">
        <div class="header">
            <div class="nav-container">
                <div class="back">
                    <router-link tag="a" to="/">
                        <i class="fa fa-angle-left" aria-hidden="true"></i>
                    </router-link>
                </div>
                <div class="title">
                    <span>带带大师兄</span>
                    <p class="online">在线</p>
                </div>
                <div class="means">
                    <router-link tag="a" :to="`/means/${this.id}`">
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="main">
            <p class="time">下午3:36</p>
            <div :class="items.name" v-for="(items,i) in chats" :key="i">
                <img class="icon" :src="items.icon" width="40" height="40" @click="Fprofile">
                <p class="comment" v-if="items.commentType === 0" v-html="items.comment">
                    {{items.comment}}
                </p>
                <p class="comment-img" v-if="items.commentType === 1">
                    <img :src="items.comment">
                </p>
            </div>
            <div ref="gd"></div>
        </div>
        <div class="footer">
            <div class="send-container">
                <form>
                    <input type="text" v-model="comment">
                    <button @click="handle">
                        发送
                    </button>
                </form>
            </div>
            <div class="icon-container">
                <div class="voice">
                    <i class="fa fa-microphone" aria-hidden="true"></i>
                </div>
                <div class="image">
                    <i class="fa fa-picture-o" aria-hidden="true"></i>
                </div>
                <div class="camera">
                    <i class="fa fa-camera" aria-hidden="true"></i>
                </div>
                <div class="map">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <div class="emoji">
                    <i class="fa fa-smile-o" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props:{
        id:{
            required:true
        }
    },
    data(){
        return{
            name:"me",
            icon:"/images/9.jpg",
            comment:"",
            commentType:0,
            date:'',
            chats:[
                {
                    name:"he",
                    icon:"/images/10.jpg",
                    comment:'你是不是脑子有问题',
                    commentType:0,
                },
                {
                    name:"me",
                    icon:"/images/9.jpg",
                    comment:'傻逼东西👴笑了',
                    commentType:0,
                },
                {
                    name:"he",
                    icon:"/images/10.jpg",
                    comment:'你是不是脑子有问题',
                    commentType:0,
                },
                {
                    name:"he",
                    icon:"/images/10.jpg",
                    comment:'/images/3.jpg',
                    commentType:1,
                },
                {
                    name:"he",
                    icon:"/images/10.jpg",
                    comment:'你是不是脑子有问题',
                    commentType:0,
                },
                {
                    name:"he",
                    icon:"/images/10.jpg",
                    comment:'你是不是脑子有问题',
                    commentType:0,
                },
                {
                    name:"he",
                    icon:"/images/10.jpg",
                    comment:'你是不是脑子有问题',
                    commentType:0,
                },
                {
                    name:"he",
                    icon:"/images/10.jpg",
                    comment:'你是不是脑子有问题',
                    commentType:0,
                },
                {
                    name:"me",
                    icon:"/images/9.jpg",
                    comment:'傻逼东西👴笑了',
                    commentType:0,
                },
                {
                    name:"me",
                    icon:"/images/9.jpg",
                    comment:'/images/img1.jpg',
                    commentType:1,
                },

            ]
        }
    },
    methods:{
        bottom:function(){
            setTimeout(
                this.$nextTick(()=>{
                    this.$refs.gd.scrollIntoView()
                }),200
            )
        },
        //新消息默认底部
        handle:function(){
            var chat = {
                name:this.name,
                icon:this.icon,
                comment:this.comment,
                commentType:this.commentType,
            };
            this.chats.push(chat);
            this.comment = '';
            this.bottom()
        },
        back:function(){
            this.$router.go(-1);
        },
        Fprofile:function(){
            this.$router.push({path: `/means/${this.id}`});
        }
    },
    sockets:{

    },
    //进消息刷新到底部
    mounted(){
        this.bottom()
        // this.sockets.listener.subscribe("message",data=>{
        //     console.log(data)
        // })
    },
    updated(){

    }
}
</script>

<style scoped>
@import '../assets/css/char.css';
</style>
