const server = require('./server/server');
const router = require('./server/route');
const { whitelist } = require('./whitelist');

server.startServer(99, router);
router.routeHeaders["/getIP"] = function (request, response) {
    let ipR = request.connection.remoteAddress;
    let ipH = request.headers.host;
    response.writeHead(200, { "Content-Type": "text/plain" });
    let data = { ip: ipR, access: whitelist[ipR] === true ? true : false };
    response.write(JSON.stringify(data));
}
