<template>
    <div id="login" class="container">
        <!--logo-->
        <div class="logo-container">
            <img class="logo" src="../assets/images/logo.png">
        </div>
        <!--登录框-->
        <div class="form-container">
            <form @submit.prevent="login">
                <div class="user">
                    <input type="text" placeholder="账号/邮箱" autocomplete='off' required  v-model="user.chat_id"/>
                </div>
                <div class="password">
                    <i class="fa" :class="icon" aria-hidden="true" @click="showPassword"></i>
                    <input id="pwd" :type="inputType" placeholder="输入密码" autocomplete='off' required v-model="user.password"/>
                </div>
                <button>
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </button>
            </form>
        </div>
        <!--注册-->
        <div class="register-container">
            <a>忘记密码</a>
            <span>|</span>
            <router-link tag="a" to="/register">用户注册</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            user:{},
            eye:false,
            icon:'fa-eye-slash',
            inputType:'password',
        }
    },
    methods:{
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
        login:function(){
            this.$http.post("/login",this.user).then(res =>{
                localStorage.token = res.data.token;
                this.$root.loginStatus = true;
                this.$root.getUser()
                this.$router.push("/")
            })
        }
    }
}
</script>

<style scoped>
@import '../assets/css/login.css';
</style>
