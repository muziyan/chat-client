<template>
    <div id="main" class="container">
        <div class="header">
            <div class="nav-container">
                <router-link tag="div" to="/means/1" class="icon">
                    <img :src="$root.user.avatar" width="40" height="auto">
                </router-link>
                <div class="title">
                    <span :class="{active:active === i}" v-for="(item,i) in title" :key="i">{{item}}</span>
                </div>
                <router-link tag="div" to="/found" class="add"></router-link>
            </div>
        </div>
        <router-view :key="$route.path"></router-view>
        <div class="footer">
            <div class="menu-container">
                <ul class="menu-list">
                    <li :class="{active:active === i}" class="menu-item" v-for="(items,i) in nav" :key="i" @click="active = i">
                        <router-link tag="a" :to="{path:items.route}">
                            <i class="fa" :class="items.icon" aria-hidden="true"></i>
                            <span>{{items.name}}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            active:0,
            title:['消息','联系人','动态'],
            nav:[
                {
                    id:0,
                    name:'消息',
                    route:'/',
                    icon:'fa-commenting'
                },
                {
                    id:1,
                    name:'联系人',
                    route:'/link',
                    icon:'fa-user-circle'
                },
                {
                    id:2,
                    name:'动态',
                    route:'/trends',
                    icon:'fa-globe'
                },
            ]
        }
    },
    methods:{
        activeNav(){
            this.nav.forEach(v=>{
                if(v.route === this.$route.path){
                    this.active = v.id;
                }
            })
        }
    },
    created(){
        this.activeNav()
        this.$http.get("/user-requests/1").then(res=>{
            console.log(res)
        })
    }
}
</script>

<style scoped>
@import '../assets/css/main.css';
</style>
