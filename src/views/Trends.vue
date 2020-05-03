<template>
    <div id="trends" class="main">
        <div class="search">
            <!-- <i class="fa fa-search" aria-hidden="true"></i>
            <input type="text" placeholder="搜索" @click.prevent="Search()"> -->
            <router-link tag="p" to="/search"><i class="fa fa-search" aria-hidden="true"></i>搜索</router-link>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        
    }
}
</script>

<style scoped>
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
ul,li{
    list-style: none;
}
a,a:hover{
    text-decoration: none;
}
#trends{
    padding:56px 0 59px 0;
}
</style>