export default{
    //聊天时间转换
    dateTime(e){
        let old = new Date(e);
        let now = new Date();
        //消息时间
        let oY = old.getFullYear()
        let oM = old.getMonth()+1
        let oD = old.getDate()
        let od = old.getTime()
        let oh = old.getHours()
        let om = old.getMinutes()
        if(om < 10){
            om = '0' + om
        }
        //当前时间
        let nY = now.getFullYear()
        let nM = now.getMonth()+1
        let nD = now.getDate()
        let nd = now.getTime()
        let nh = now.getHours()
        let nm = now.getMinutes()

        if(oD === nD && oM === nM && oY === nY){
            // return oh+':'+om
            if(oh < 12){
                return '上午'+oh+':'+om
            }
            if(oh > 12){
                return '下午'+(oh-12)+':'+om
            }
            if(oh = 12){
                return '中午'+oh+':'+om
            }
        }
        if(oD+1 === nD && oM === nM && oY === nY){
            return '昨天'
        }else{
            return oY+'-'+oM+'-'+oD
        }
    },
    //详细时间
    detialTime(e){
        let old = new Date(e);
        //消息时间
        let Y = old.getFullYear()
        let M = old.getMonth()+1
        let D = old.getDate()
        let d = old.getTime()
        let h = old.getHours()
        let m = old.getMinutes()
        let s = old.getSeconds()
        if(M < 10){
            M = '0' + M
        }
        if(h < 10){
            h = '0' + h
        }
        if(m < 10){
            m = '0' + m
        }
        if(s < 10){
            s = '0' + s
        }
        return Y+'-'+M+'-'+D+' '+h+':'+m+':'+s;
    }
}