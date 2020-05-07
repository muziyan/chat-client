<template>
    <div id="gd">
        <div class="bag">
            <img :src="groupAvatar">
        </div>
        <div class="nav">
            <i @click="back" class="fa fa-angle-left" aria-hidden="true"></i>
        </div>
        <div class="group-img">
            <h5-cropper :option="option" @getblobData="getFile"></h5-cropper>
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
                        <span @click.prevent="Manage" v-if="del === false">成员管理<i class="fa fa-angle-right" aria-hidden="true"></i></span>
                        <span class="complete" v-if="del" @click.prevent="Manage">完成</span>
                    </div>
                </div>
                <div class="center">
                    <ul class="meb-list">
                        <li class="meb-item" v-for="(items,index) in groupMember" :key="index">
                            <i v-if="items.id != 1" @click.prevent="delUser(index)" :class="{active:del}" class="fa fa-times del" aria-hidden="true"></i>
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
                <a @click.prevent="isOut">解散群聊</a>
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
            <transition class="kade" name="kade">
                <div class="sign-out" v-if="out">
                    <div class="out-container">
                        <h3>提示</h3>
                        <p>确定解散该群？</p>
                        <div class="btn">
                            <a href="">确定</a>
                            <div class="zw"></div>
                            <a @click.prevent="isOut">取消</a>
                        </div>
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
            out:false,
            del:false,
            delData:'',
            groupAvatar:'/images/10.jpg',
            groupName:'傻逼群',
            groupTime:'2020-04-30',
            groupNotice:'一日三餐没烦恼,今天就吃老八秘制小汉堡🍔,既实惠,还管饱,臭豆腐,腐乳,加柠檬,你看这🍔做的行不行',
            groupCard:'QQ小八',
            groupMember:[
                {
                    id:1,
                    avatar:'/images/1.jpg',
                    username:'傻🐕',
                },
                {
                    id:2,
                    avatar:'/images/2.jpg',
                    username:'岛式老八',
                },
                {
                    id:3,
                    avatar:'/images/3.jpg',
                    username:'带带大师兄',
                },
                {
                    id:4,
                    avatar:'/images/4.jpg',
                    username:'金牌厨师',
                },
                {
                    id:5,
                    avatar:'/images/5.jpg',
                    username:'抽象带蓝子',
                },
                {
                    id:6,
                    avatar:'/images/6.jpg',
                    username:'RNG污渍',
                },
                {
                    id:7,
                    avatar:'/images/7.jpg',
                    username:'退役辅助山泥若',
                },
                {
                    id:8,
                    avatar:'/images/8.jpg',
                    username:'斗鱼张顺飞',
                },
                {
                    id:9,
                    avatar:'/images/9.jpg',
                    username:'QQ机器狗',
                },
                {
                    id:10,
                    avatar:'/images/10.jpg',
                    username:'QQ小冰',
                },
            ],
        }
    },
    components: {
      H5Cropper,
    },
    methods:{
        getFile(blob) {
            this.groupAvatar = window.URL.createObjectURL(blob)
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
        Manage:function(){
            if(this.del){
                this.del = false
            }else{
                this.del = true
            }
        },
        delUser:function(e){
            this.groupMember.splice(e,1)
        },
        isOut:function(){
            if(this.out){
                this.out = false
            }else{
                this.out = true
            }
        }
    }
}
</script>

<style scoped>
@import '../assets/css/gd.css';
</style>
