<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
    margin:0;
    padding:0;
    font-size:16px;
    background:#F5F6FA;
    -webkit-tap-highlight-color: transparent;
}
#app{
    padding-top:var(--status-bar-height);
}
.search{
    width:100%;
    position: relative;
    padding:10px 20px!important;
    background:#fff;
}
.search p{
    width:100%;
    padding:10px 0;
    background:#f5f6ff;
    border-radius:50px;
    font-size:16px;
    text-align: center;
    color:#b0b3bf;
}
.search p i{
    margin-right:2px;
}
</style>
