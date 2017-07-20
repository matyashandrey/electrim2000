const cssVersion = '2017_07_07_0950';

var portArgv, port = 5000;
if (process.argv) {
    portArgv = process.argv[process.argv.length - 1] * 1;
    port = portArgv > 1000 ? portArgv : port;
}

module.exports = {
    render: {
        root: "app/views",
        layout: "layout",
        viewExt: "ejs",
        cache: false,
        debug: true
    },
    host: 'http://net-market.ua',
    rest: {
        host: 'http://market.rest.ria.com'
    },
    server: {
        port: process.env.NODE_APP_INSTANCE || 5000
    },
    app: {
        name: "Isomorphic Koa 2"
    },
    cssVersion: cssVersion,
};




