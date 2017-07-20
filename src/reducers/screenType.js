import * as actionsTypes from '../constants/actionsTypes'
import * as screenTypes from '../constants/screenTypes'

export default (state = screenTypes.DESKTOP_HD, action) =>
{
    switch (action.type) {
        case actionsTypes.SCREEN_TYPE_CHANGED:
            return action.screenType;
        default:
            return state;
    }
}