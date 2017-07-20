import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'


import somebody from './somebodyReducer'
import screenType from "./screenType"



const rootReducer = combineReducers({
    screenType,
    somebody,
    routing: routerReducer
});



export default rootReducer;