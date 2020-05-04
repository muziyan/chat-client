module.exports = {
    lintOnSave:false,
    devServer: {
        disableHostCheck: true,
        proxy:{
            "/socket.io":{
                target:"http://localhost:8000"
            }
        }
    }
}
