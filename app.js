var http = require ('http')
var fs = require ('fs')

http
    .createServer(function(req, res){
        console.log('Got request')
        var url = req.url
        if (url === '/') {
            fs.readFile('./heart.html', function(err, data){
                if(err){
                    return res.end('404 not found')
                }
                res.end(data)
            })
        } else if (url.indexOf('/public/') === 0) {       //开放 public 静态资源库，否则 html 页面无法读取 css javascript image 等文件资源
            fs.readFile('.' + url, function(err, data){
                if (err) {
                    return res.end('404 not found')
                }
                res.end(data)
            })
        }

    })
    .listen(8080, function(){
        console.log('Running on 8080')
    })