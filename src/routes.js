/*jslint smarttabs:true */
import React from 'react';
import {Route, IndexRoute} from 'react-router';


import actionVirtusPage from './containers/landings/actionVirtus';


import Wrapper from './containers/Wrapper';


export default  (
	<Route path="/" component={Wrapper}>
		<IndexRoute component={actionVirtusPage}/>
		<Route path="*" component={actionVirtusPage}/>
	</Route>
);