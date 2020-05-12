import Vue from "vue"
import VueSocketIO from "vue-socket.io";
import socketIo from "socket.io-client"

Vue.use(new VueSocketIO({
    debug:true,
    connection:"http://localhost:7001"
}))
