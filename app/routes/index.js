import Router from 'koa-router';

import reactApp from '../controllers/landingController';

let router = Router();
router.get('*', reactApp);


export default router;