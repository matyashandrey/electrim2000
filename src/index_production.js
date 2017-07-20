import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import ReactGA from 'react-ga';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux'
import {configureStore} from './store'
import getUserState from './middlewares/getUserState'
import screenType from './components/ScreenType'
import * as userActionCreater from './actions/User'
import * as goodsActionCreater from './actions/Goods'
import * as menuActionCreater from './actions/Menu'
require('es6-promise').polyfill();
import axios from 'axios';


ReactGA.initialize('UA-19664144-1');

function logPageView() {

    // genCode start >>>>
    let {User : {data:userInfo = {}} = {}} = store.getState();

    let page;
    let corePage = window.location.pathname.replace(/\?.*/, '');

    if (corePage === '/') {
        page = 'index';
    } else if (corePage.indexOf('item') !== -1) {
        page = 'card';
    } else if (corePage.indexOf('model') !== -1) {
        page = 'model';
    } else if (corePage.indexOf('specific') !== -1) {
        page = 'search_size';
    } else if (corePage.match(/^.+\/.*/) !== null) {
        page = 'search';
    } else {
        page = 'undefined';
    }

    let {
        user_id,
        web_client_id,
        user_ip
    } = userInfo

    if (user_id && web_client_id) {
        let url = `/ajax_node/setGenCode/${+user_id}/${+web_client_id}/${page}/${encodeURIComponent(window.location.pathname)}/${user_ip}?agent=${window.navigator.userAgent}`;
        axios.get(url);
    }

    //genCode end <<<<<
    let url_ga = window.location.pathname + window.location.search;

    let bodyAbTest = localStorage.getItem('bodyAbTest');

    let gaObj = {};

    gaObj.page = url_ga;

    if (bodyAbTest) {
        gaObj.dimension2 = bodyAbTest;
    }


    if (window.location.pathname.indexOf('l_spring') !== -1) {
        let {Info : {abTest:abTestSpring = 1} = {}} = store.getState();
        gaObj.dimension3 = abTestSpring;
    }

    ReactGA.set(gaObj);

    ReactGA.pageview(url_ga);
}


import routes from './routes';

const store = configureStore(browserHistory, window.init, [getUserState]);
const history = syncHistoryWithStore(browserHistory, store);

let {User : {data:{user_id = 0} = {}} = {}} = store.getState();
user_id > 0 ? store.dispatch(userActionCreater.checkShop(user_id)) : true;

store.dispatch(userActionCreater.init());
store.dispatch(userActionCreater.getBag());
store.dispatch(userActionCreater.getFavorites());
store.dispatch(userActionCreater.getCars());
store.dispatch(menuActionCreater.getMenuCarCategory());
store.dispatch(goodsActionCreater.checkShare());


let {location : {host} = {}} = window;
if (host !== 'webcache.googleusercontent.com') {
    render(
        <Provider store={store}>
            <Router history={history} routes={routes} onUpdate={logPageView}/>
        </Provider>, document.querySelector('#content')
    );
}

screenType(store.dispatch);