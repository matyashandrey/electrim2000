/**
 * Created by root on 04.08.16.
 */
import * as actionTypes from '../constants/actionsTypes'

export default (screenType)=> ({
    type: actionTypes.SCREEN_TYPE_CHANGED,
    screenType
})