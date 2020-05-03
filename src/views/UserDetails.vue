<template>
    <div id="user">
        <div class="nav">
            <div class="left" @click="back">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
            </div>
            <div class="mid">
                <span>用户信息</span>
            </div>
            <div class="right">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
            </div>
        </div>
        <div class="list">
            <div class="icon">
                <div class="left">
                    <span>头像</span>
                </div>
                <div class="mid">
                    <h5-cropper :option="option" @getbase64Data="getbase64Data"></h5-cropper>
                    <img :src="icon" width="56px" height="56px">
                </div>
                <div class="right">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </div>
            </div>
            <div class="user">
                <div class="left">
                    <span>账号</span>
                </div>
                <div class="mid">
                    <span>{{this.user}}</span>
                </div>
                <div class="right">
                </div>
            </div>
            <div @click.prevent="Eject('签名',sign,false)" class="sign">
                <div class="left">
                    <span>签名</span>
                </div>
                <div class="mid">
                    <span>{{this.sign}}</span>
                </div>
                <div class="right">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </div>
            </div>
            <div class="regi">
                <div class="left">
                    <span>注册时间</span>
                </div>
                <div class="mid">
                    <span>{{ChangeTime(this.regist)}}</span>
                </div>
                <div class="right">
                    
                </div>
            </div>
            <div @click.prevent="Eject('名称',name,false)" class="name">
                <div class="left">
                    <span>名称</span>
                </div>
                <div class="mid">
                    <span>{{this.name}}</span>
                </div>
                <div class="right">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </div>
            </div>
            <div class="sex" @click="show">
                <div class="left">
                    <span>性别</span>
                </div>
                <div class="mid">
                    <span>{{this.sex}}</span>
                </div>
                <div class="right">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </div>
            </div>
            <VuePicker :data="pickData"
            :showToolbar="true"
            @confirm="confirm"
            :visible.sync="pickerVisible"
            />
            <div class="birt">
                <div class="left">
                    <span>生日</span>
                </div>
                <div class="mid">
                    <datetime input-style="color:#524a4a;border:0;font-size:16px;padding-top:6px;width:100%;" v-model="date" format="yyyy-MM-dd" class="theme-orange"></datetime>
                </div>
                <div class="right">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </div>
            </div>
            <div @click.prevent="Eject('电话',tel,false)" class="tel">
                <div class="left">
                    <span>电话</span>
                </div>
                <div class="mid">
                    <span>{{this.tel}}</span>
                </div>
                <div class="right">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </div>
            </div>
            <div @click.prevent="Eject('邮箱',email,true)" class="email">
                <div class="left">
                    <span>邮箱</span>
                </div>
                <div class="mid">
                    <span>{{this.email}}</span>
                </div>
                <div class="right">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </div>
            </div>
            <div @click.prevent="Eject('密码',pwd,true)" class="pwd">
                <div class="left">
                    <span>密码</span>
                </div>
                <div class="mid">
                    <span>{{this.pwd}}</span>
                </div>
                <div class="right">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </div>
            </div>
        </div>
        <div class="footer">
            <a @click.prevent="">退出账号</a>
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
                    <input type="text" class="pwd" placeholder="请输入原密码" v-if="ispwd">
                    <textarea class="content-msg" maxlength="60" v-model="data"></textarea>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import H5Cropper from "vue-cropper-h5";
import VuePicker from 'vue-pickers';
import myFun from '../assets/js/myFun';
  var tdata = [
      {
          label:'男',
          value:'0'
      },
      {
          label:'女',
          value:'1'
      },
      {
          label:'未知',
          value:'2'
      },
  ]
export default {
    props:{
        id:{
            required:true
        }
    },
    data(){
        return{
            icon:'/static/images/9.jpg', //头像
            user:'a585462',
            sign:'一日三餐没烦恼,今天就吃老八秘制小汉堡🍔,既实惠,还管饱,臭豆腐,腐乳,加柠檬,你看这🍔做的行不行。', //签名
            regist:new Date(), //注册时间
            name:'带带大师兄', //名称
            sex:'未知', //性别
            date:'2020-01-09', //生日
            tel:'1832015231', //电话
            email:'admin@welome.cn', //邮箱
            pwd:'●●●●●●', //密码
            modifyTitle:'',
            data:'修改的内容', //内容
            ispwd:false, //是否需要密码
            pickerVisible: false,
            pickData: [tdata],
            option: {}, //图片选择设置
            popup:false
        }
    },
    components: {
      H5Cropper,
      VuePicker,
      
    },
    mounted(){

    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        //性别选择
        show () {
            this.pickerVisible = true
        },
        // cancel () {
        //     this.result = 'click cancel result: null'
        // },
        confirm (res){
            var arr = res
            arr.forEach(v=>{
                this.sex = v.label
            })
            // this.result = JSON.stringify(res)
        },
        //头像
        getbase64Data(data) {
            this.icon = data;
        },
        //修改弹框
        Eject:function(type,data,ispwd){
            this.popup = !this.popup
            this.modifyTitle = type
            this.data = data
            this.ispwd = ispwd
        },
        EjectSubmit:function(){
            this.Eject()
        },
        //格式化时间
        ChangeTime:function(e){
            return myFun.detialTime(e)
        }
    }
}
</script>

<style scoped>
@import '../assets/css/user.css';
</style>