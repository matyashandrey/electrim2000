import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux'
import {configureStore, DevTools} from './store'
import getUserState from './middlewares/getUserState'
import screenType from './components/ScreenType'

require('es6-promise').polyfill();





import routes from './routes';

const store = configureStore(browserHistory, window.init, [getUserState]);
const history = syncHistoryWithStore(browserHistory, store);



let {location : {host} = {}} = window;
if (host !== 'webcache.googleusercontent.com') {
    render(
        <Provider store={store}>
            <Router history={history} routes={routes} onUpdate={logPageView}/>
        </Provider>, document.querySelector('#content')
    );
}

{/*render(<Provider store={store}><DevTools/></Provider>, document.getElementById('devtools'));*/}

screenType(store.dispatch);