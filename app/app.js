import Koa from 'koa';
import config from 'config';
import serve from 'koa-static';

import bodyparser from './helpers/bodyParser';
import render from './helpers/render';
import router from './helpers/router';

let app = new Koa();


bodyparser(app);
require('koa-qs')(app);

render(app, config);
app.use(serve(__dirname + '/../public'));


router(app);

app.listen(process.env.PORT || 5000, async function () {


	console.log('%s listening at port %d', config.app.name, config.server.port);
});
