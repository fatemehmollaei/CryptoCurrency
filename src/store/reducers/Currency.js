import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utiliy'

const initialState = {
    currency : null,
    currencyDay : null,
    currencyMonth : null,
    currencyYear : null,
    error  : null,
    loading: false
}

const currencyStart = (state, action) => {
    return updateObject(state, {
        loading:true
    })
}

const currencySuccess = (state, action) => {
    return updateObject(state, {
        currency:action.currency
    })
}
const currencyDSuccess = (state, action) => {
    return updateObject(state, {
        currencyDay:action.currency
    })
}
const currencyMSuccess = (state, action) => {
    return updateObject(state, {
        currencyMonth:action.currency
    })
}
const currencyYSuccess = (state, action) => {
    return updateObject(state, {
        currencyYear:action.currency
    })
}

const currencyFail = (state, action) => {
    return updateObject(state, { error: action.error, loading: false })
}
  
const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CURRENCY_START: return currencyStart(state, action);
        case actionTypes.CURRENCY_SUCCESS: return currencySuccess(state, action)
        case actionTypes.CURRENCYD_SUCCESS: return currencyDSuccess(state, action)
        case actionTypes.CURRENCYM_SUCCESS: return currencyMSuccess(state, action)
        case actionTypes.CURRENCYY_SUCCESS: return currencyYSuccess(state, action)
        case actionTypes.CURRENCY_FAIL: return currencyFail(state, action)
        default: return state
    }

}
export default searchReducer