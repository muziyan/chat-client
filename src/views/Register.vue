<template>
  <div id="register" class="container">
        <div class="back">
            <router-link tag="a" to="/login">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
            </router-link>
        </div>
        <div class="form-container">
            <h3 class="title">用户注册</h3>
            <form @submit.prevent="submitForm">
                <div class="name">
                    <span>名称</span>
                    <input type="text" autocomplete='off' placeholder="用户名称不超过八个字母或八个中文" required v-model="user.username" @blur="isName()">
                    <span class="occupy" v-if="nameOccupy">超出长度</span>
                    <i class="yes fa fa-check" aria-hidden="true" v-if="isname"></i>
                </div>
                <div class="user">
                    <span>账号</span>
                    <input type="text" autocomplete='off' placeholder="请输入五到十位数的帐号" required v-model="user.chat_id" @blur="isUser()">
                    <span class="occupy" v-if="userOccupy">已存在</span>
                    <span class="invalid" v-if="userLength">5-10位</span>
                    <i class="yes fa fa-check" aria-hidden="true" v-if="isuser"></i>
                </div>
                <div class="email">
                    <span>邮箱</span>
                    <input type="email" autocomplete='off' placeholder="请输入邮箱" required v-model="user.email" @blur="isEmail()">
                    <span class="occupy" v-if="emailOccupy">已存在</span>
                    <span class="invalid" v-if="invalid">邮箱无效</span>
                    <i class="yes fa fa-check" aria-hidden="true" v-if="isemail"></i>
                </div>
                <div class="password">
                    <span>密码</span>
                    <input :type="inputType" placeholder="请输入密码" autocomplete='off' required v-model="user.password">
                    <i class="fa" :class="icon" aria-hidden="true" @click="showPassword"></i>
                </div>
                <button class="reg active" type="submit">立即注册</button>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            isname:false, //名称是否可用
            isuser:false, //用户名是否可用
            isemail:false, //邮箱是否可用
            invalid:false, //判断邮箱是否符合
            userLength:false, //账号是否符合
            nameOccupy:false, //名称是否超出
            userOccupy:false, //帐号是否存在
            emailOccupy:false,  //邮箱是否存在
            eye:false, //显示密码
            icon:'fa-eye-slash', //控制图标
            inputType:'password', //文本输入类型
            isok:false,
            user:{}
        }
    },
    methods:{
        submitForm(){
            this.$http.post("/register",this.user).then(res =>{
                this.$router.push("/login")
            })
        },
        //显示隐藏密码
        showPassword:function(){
            if(this.eye){
                this.eye = false
                this.inputType = 'password'
                this.icon = 'fa-eye-slash'
            }else{
                this.eye = true
                this.inputType = 'text'
                this.icon = 'fa-eye'
            }
        },
        //判断名称
        isName:function(){
          if (this.user.username){
            if(this.user.username.length <= 8){
              this.isname = true
              this.nameOccupy =false
            }else{
              this.isname = false
              this.nameOccupy =true
            }
          }
        },
        //判断账号
        isUser:function(){
            let reg = /^[a-zA-Z0-9]{5,10}$/;
            if(this.user.chat_id && this.user.chat_id.length > 5 && this.user.chat_id.length < 10){
                if(reg.test(this.user.chat_id)){
                    this.checkChatId()
                }
            }else{
                this.isuser = false
                this.userLength = true
            }
        },
        //判断邮箱
        isEmail:function(){
            let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
            if(this.user.email){
                if(reg.test(this.user.email)) {
                  this.checkEmail()
                }
            }
        },
        checkChatId(){
          this.$http.get(`/users/checkChatId/${this.user.chat_id}`).then(res =>{
            this.userOccupy = false
            if (res){
              this.isuser = true
              this.userLength = false
            }
          },err=>{
            if (err.response){
              this.userOccupy = true
              this.isuser = false
              this.userLength = false
            }
          })
        },
        checkEmail(){
          this.$http.get(`/users/checkEmail/${this.user.email}`).then(res =>{
            if (res){
                this.emailOccupy = false
            }
        },err=>{
            if (err.response){
              this.emailOccupy = true
            }
          })
      },
    },
}
</script>

<style scoped>
@import '../assets/css/register.css';
</style>
