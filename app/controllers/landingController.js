import React from 'react';
import ReactDomServer from 'react-dom/server';
import {Provider} from 'react-redux';
import {createMemoryHistory, match, RouterContext} from 'react-router';
import fetchComponentData from './../helpers/fetchComponentData';
import {syncHistoryWithStore} from 'react-router-redux'
import Html from '../../src/helpers/Html';

import routes from '../../src/routes';
import {configureStore} from './../../src/store';
import * as screenTypes from '../../src/constants/screenTypes'
import MobileDetect from 'mobile-detect'


export default async function (ctx) {

    const userAgent = ctx.req.headers['user-agent'];
    const mobileDetect = new MobileDetect(userAgent);
    const screenType = mobileDetect.mobile() ? screenTypes.MOBILE : screenTypes.DESKTOP_HD;

    const location = ctx.originalUrl;

    const initialState = {screenType};

    const memoryHistory = createMemoryHistory(ctx.originalUrl);
    const store = configureStore(memoryHistory, initialState, []);

    const history = syncHistoryWithStore(memoryHistory, store);

    if (location == '/favicon.ico') return;

    let renderWait, component;

    match({history, routes, location}, function (error, redirectLocation, renderProps) {

        renderWait = fetchComponentData(
            store.dispatch,
            renderProps.components,
            renderProps.params,
            renderProps.location.query
        ).then(() => {
            component = (
                <Provider store={store}>
                    <RouterContext {...renderProps} />
                </Provider>
            );
        });

    });


    if (renderWait) {
        let html = await renderWait;
        ctx.body = '<!doctype html>\n' +
            ReactDomServer.renderToString(<Html component={component} store={store}/>);
    }

}