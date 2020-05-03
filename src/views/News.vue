<template>
    <div id="news" class="main">
        <div class="search">
            <router-link tag="p" to="/search"><i class="fa fa-search" aria-hidden="true"></i>搜索</router-link>
        </div>
        <div class="news-container">
            <ul class="news-list">
                <li class="news-item" v-for="(items,i) in news" :key="i">
                    <router-link tag="a" :to="`/char/${items.id}`">
                        <div class="left">
                            <img :src="items.icon" width="48" height="48">
                        </div>
                        <div class="mid">
                            <h3 class="title">{{items.name}}</h3>
                            <p class="content">{{items.LatestNews}}</p>
                        </div>
                        <div class="right">
                            <p class="time">{{changeTime(items.time)}}</p>
                            <span v-if="items.unread != 0" class="unread">{{items.unread}}</span>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import data from '../assets/js/data.js'
import myFun from '../assets/js/myFun.js'
export default {
    data(){
        return{
            news:[],
        }
    },
    mounted(){
        this.getNews()
    },
    methods:{
        //格式化时间
        changeTime:function(date){
            return myFun.dateTime(date)
        },
        getNews:function(){
            this.news = data.news()
            // console.log(this.news)
        },
    }
}
</script>

<style scoped>
@import "../assets/css/news.css";
</style>
