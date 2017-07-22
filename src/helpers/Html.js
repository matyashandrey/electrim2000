import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';
import config from 'config';

import versionJs from '../../assets.json'

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
class Html extends Component {
    static propTypes = {
        assets: PropTypes.object,
        component: PropTypes.node,
        store: PropTypes.object
    };


    render() {
        const {assets, component, store} = this.props;
        const content = component ? ReactDOM.renderToString(component) : '';
        const head = Helmet.rewind();
        const js_domain = config.js_domain;

        let {routing : {locationBeforeTransitions :{pathname, search : searchPath = ''} = {}} = {}} = store.getState();

        var trackingCode = `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-19664144-1', 'auto');`;


        return (
            <html lang="en-us">
            <head>
                <meta charSet="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                {head.title.toComponent()}
                {head.meta.toComponent()}

                <title>Landing Page - Start Bootstrap Theme</title>


                <link href="/css/bootstrap.min.css" rel="stylesheet"/>


                <link href="/css/landing-page.css" rel="stylesheet"/>

                <link href="/font-awesome/css/font-awesome.min.css" rel="stylesheet"
                      type="text/css"/>
                <link
                    href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic"
                    rel="stylesheet" type="text/css"/>


            </head>
            <body>


            <div id="content" dangerouslySetInnerHTML={{__html: content}}/>
            <div id="devtools"/>
            <div id="footer"/>
            <script dangerouslySetInnerHTML={{__html: `window.init=${serialize(store.getState())};`}} charSet="UTF-8"/>


            <script src={`/js/build/${versionJs.vendor.js}`} charSet="UTF-8"/>
            <script src={`/js/build/${versionJs.app.js}`} charSet="UTF-8"/>

            </body>
            </html>
        );
    }
}

export default Html