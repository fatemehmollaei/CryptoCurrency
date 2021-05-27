import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

export const currencyStart = () => {
    return {
        type:actionTypes.CURRENCY_START
    }
}

export const  currencySuccess = (data) => {
    return {
        type:actionTypes.CURRENCY_SUCCESS,
        currency:data.currency
    }
}

export const currencyFail = (error) => {
    return {
        type:actionTypes.CURRENCY_FAIL,
        error: error
    }
}



export const currencyDay = (id) => {

    return dispatch => {

        dispatch(currencyStart())
 
        axios.get('v2/assets/'+id)

            .then(response => {
           
                dispatch(currencySuccess({
                    currency:response.data.data
                }))

            })
            .catch(err => {
                dispatch(currencyFail(err.message))
            })

    }
}

export const currencyMonth = (id) => {

    return dispatch => {

        dispatch(currencyStart())
 
        axios.get('v2/assets/'+id+'/history?interval=d1')

            .then(response => {
           
                dispatch(currencySuccess({
                    currency:response.data.data
                }))

            })
            .catch(err => {
                dispatch(currencyFail(err.message))
            })

    }
}

export const currencyYear = (id) => {

    return dispatch => {

        dispatch(currencyStart())
 
        axios.get('v2/assets/'+id+'/history?interval=d1')

            .then(response => {
           
                dispatch(currencySuccess({
                    currency:response.data.data
                }))

            })
            .catch(err => {
                dispatch(currencyFail(err.message))
            })

    }
}



