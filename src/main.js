import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

import { Datetime } from 'vue-datetime'
// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'
Vue.component('datetime', Datetime);

import H5Cropper from 'vue-cropper-h5'
Vue.use(H5Cropper)

import http from "./http"
Vue.prototype.$http = http;

import './assets/fonts/icon/css/font-awesome.min.css'

import "./plugins/socket"

new Vue({
  router,
  data:{
    user:localStorage.user ? JSON.parse(localStorage.user) : false,
    loginStatus:false,
  },
  methods:{
    getUser(){
      this.$http.get("/getUser").then(res =>{
        this.user = res.data;
        localStorage.user = JSON.stringify(res.data);
      })
    },
    logout(){
      localStorage.clear();
      this.loginStatus = false;
      this.$router.push("/login")
    }
  },
  mounted(){
    if (this.loginStatus){
      this.$socket.emit("authorization",{userId:this.user.id})
      this.sockets.listener.subscribe("socketAuth",data =>{
        this.user.socketId = data;
      })
    }
  },
  created(){
    if (localStorage.token && !this.user) this.getUser();
  },
  render: h => h(App)
}).$mount('#app')
