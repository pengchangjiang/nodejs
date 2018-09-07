const http = require('http');

const url = require('url');

const _port = 88;
function onRequest(request, response, router) {
    //设置跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    let pathname = url.parse(request.url).pathname;
    router.route(pathname, router.routeHeaders, request, response);
    // response.writeHead(200, { "Content-Type": "text/plain" });
    // response.write("Hello World");
    response.end();
}

function startServer(port, router) {
    port = port || _port;
    http.createServer((request, response) => onRequest(request, response, router)).listen(port, '0.0.0.0');
    console.log("服务启动：", port);
}

exports.startServer = startServer;
