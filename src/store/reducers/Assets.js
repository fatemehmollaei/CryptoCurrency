import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utiliy'

const initialState = {
    assets : null,
    error  : null,
    loading: false
}

const assetsStart = (state, action) => {
    return updateObject(state, {
        loading:true
    })
}

const assetsSuccess = (state, action) => {
    return updateObject(state, {
        assets:action.assets
    })
}

const assetsFail = (state, action) => {
    return updateObject(state, { error: action.error, loading: false })
}
  
const assetReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ASSETS_START: return assetsStart(state, action);
        case actionTypes.ASSETS_SUCCESS: return assetsSuccess(state, action)
        case actionTypes.ASSETS_FAIL: return assetsFail(state, action)
        default: return state
    }

}
export default assetReducer