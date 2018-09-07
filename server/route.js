function route(pathname, handler, request, response) {
    if (typeof handler[pathname] === 'function') {
        handler[pathname](request, response);
    } else {
        console.log("No request handler found for " + pathname);
    }
}

var routeHeaders = {
    '/': function () {
        console.log("/");
    },
    '/index': function () {
        console.log('/index');
    }
}
exports.route = route;
exports.routeHeaders = routeHeaders;