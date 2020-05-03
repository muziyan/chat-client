<template>
    <div id="gd">
        <div class="bg">
            <img :src="groupAvatar">
        </div>
        <div class="nav">
            <i @click="back" class="fa fa-angle-left" aria-hidden="true"></i>
        </div>
        <div class="group-img">
            <h5-cropper :option="option" @getbase64Data="getbase64Data"></h5-cropper>
        </div>
        <div class="group-container">
            <div class="group-name">
                <div class="top">
                    <div class="left">
                        <span class="name">{{this.groupName}}</span>
                    </div>
                    <div class="right">
                        <span class="time">{{this.groupTime}}</span>
                    </div>
                </div>
                <div class="center">
                    <p>{{this.groupNotice}}</p>
                </div>
            </div>
            <div class="group-meb">
                <div class="top">
                    <div class="left">
                        <span>群成员</span>
                    </div>
                    <div class="right">
                        <span>成员管理<i class="fa fa-angle-right" aria-hidden="true"></i></span>
                    </div>
                </div>
                <div class="center">
                    <ul class="meb-list">
                        <li class="meb-item" :class="{db:index > 3}" v-for="(items,index) in groupMember" :key="index">
                            <img :src="items.avatar" width="52" height="52">
                            <span>{{items.username}}</span>
                        </li>
                        <li class="meb-item">
                            <p><i class="fa fa-plus" aria-hidden="true"></i></p>
                            <span class="add">添加</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="group-age">
                <div @click.prevent="Eject('群名称',groupName)" class="name">
                    <div class="left">
                        <span>群名称</span>
                    </div>
                    <div class="mid">
                        <span>{{this.groupName}}</span>
                    </div>
                    <div class="right">
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                </div>
                <div @click.prevent="Eject('群公告',groupNotice)" class="notice">
                    <div class="left">
                        <span>群公告</span>
                    </div>
                    <div class="mid">
                        <span>{{this.groupNotice}}</span>
                    </div>
                    <div class="right">
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                </div>
                <div @click.prevent="Eject('群名片',groupCard)" class="card">
                    <div class="left">
                        <span>群名片</span>
                    </div>
                    <div class="mid">
                        <span>{{this.groupCard}}</span>
                    </div>
                    <div class="right">
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="footer">
                <a style="display:none;" href="">退出群聊</a>
                <a href="">解散群聊</a>
            </div>
            <transition class="fade" name="fade">
                <div class="sign-modify" v-if="popup">
                    <div class="topbar">
                        <div class="left">
                            <span @click.prevent="Eject">取消</span>
                        </div>
                        <div class="mid">
                            <span class="center">{{this.modifyTitle}}</span>
                        </div>
                        <div class="right">
                            <span @click.prevent="EjectSubmit">确定</span>
                        </div>
                    </div>
                    <div class="content">
                        <textarea class="content-msg" maxlength="60" v-model="data"></textarea>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import H5Cropper from "vue-cropper-h5";
export default {
    data(){
        return{
            option:{},
            modifyTitle:'',
            data:'修改内容',
            popup:false,
            groupAvatar:'/static/images/10.jpg',
            groupName:'傻逼群',
            groupTime:'2020-04-30',
            groupNotice:'一日三餐没烦恼,今天就吃老八秘制小汉堡🍔,既实惠,还管饱,臭豆腐,腐乳,加柠檬,你看这🍔做的行不行',
            groupCard:'QQ小八',
            groupMember:[
                {
                    avatar:'/static/images/1.jpg',
                    username:'傻🐕',
                },
                {
                    avatar:'/static/images/2.jpg',
                    username:'岛式老八',
                },
                {
                    avatar:'/static/images/3.jpg',
                    username:'带带大师兄',
                },
                {
                    avatar:'/static/images/4.jpg',
                    username:'金牌厨师',
                },
                {
                    avatar:'/static/images/5.jpg',
                    username:'抽象带蓝子',
                },
                {
                    avatar:'/static/images/6.jpg',
                    username:'RNG污渍',
                },
                {
                    avatar:'/static/images/7.jpg',
                    username:'退役辅助山泥若',
                },
                {
                    avatar:'/static/images/8.jpg',
                    username:'斗鱼张顺飞',
                },
                {
                    avatar:'/static/images/9.jpg',
                    username:'QQ机器狗',
                },
                {
                    avatar:'/static/images/10.jpg',
                    username:'QQ小冰',
                },
            ],
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
        Eject:function(type,data){
            this.popup = !this.popup
            this.modifyTitle = type
            this.data = data
        },
        EjectSubmit:function(){
            this.Eject()
        },
    }
}
</script>

<style scoped>
@import '../assets/css/gd.css';
</style>