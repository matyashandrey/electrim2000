/*jslint smarttabs:true */
import React from 'react';
import {Route, IndexRoute} from 'react-router';


import IndexPage from './containers/Index';
import ReviewPage from './containers/Review';


import Wrapper from './containers/Wrapper';


export default  (
	<Route path="/" component={Wrapper}>
		<IndexRoute component={IndexPage}/>
		<Route path="/review/" component={ReviewPage}/>
		<Route path="*" component={IndexPage}/>
	</Route>
);