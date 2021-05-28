import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'
import  {Daily,Monthly,Yearly} from '../../calc-history'

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

export const  currencyDSuccess = (data) => {
    return {
        type:actionTypes.CURRENCYD_SUCCESS,
        currency:data.currency
    }
}

export const  currencyMSuccess = (data) => {
    return {
        type:actionTypes.CURRENCYM_SUCCESS,
        currency:data.currency
    }
}

export const  currencyYSuccess = (data) => {
    return {
        type:actionTypes.CURRENCYY_SUCCESS,
        currency:data.currency
    }
}

export const currencyFail = (error) => {
    return {
        type:actionTypes.CURRENCY_FAIL,
        error: error
    }
}

export const currency = (id) => {

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

export const currencyDay = (id) => {
  
    const history = Daily()
    const url = 'v2/assets/'+id+'/history?interval=h1&start='+history.start+'&end='+history.end

    return dispatch => {

        dispatch(currencyStart())
 
        axios.get(url)

            .then(response => {
              
                dispatch(currencyDSuccess({
                    currency:response.data.data
                }))

            })
            .catch(err => {
                dispatch(currencyFail(err.message))
            })

    }
}

export const currencyMonth = (id) => {
   
    const history = Monthly()
    const url = 'v2/assets/'+id+'/history?interval=d1&start='+history.start+'&end='+history.end

    return dispatch => {

        dispatch(currencyStart())
 
        axios.get(url)

            .then(response => {
              
                dispatch(currencyMSuccess({
                    currency:response.data.data
                }))

            })
            .catch(err => {
                dispatch(currencyFail(err.message))
            })

    }
}

export const currencyYear = (id) => {

    const history = Yearly()
    const url = 'v2/assets/'+id+'/history?interval=d1&start='+history.start+'&end='+history.end

    return dispatch => {

        dispatch(currencyStart())
 
        axios.get(url)

            .then(response => {
                dispatch(currencyYSuccess({
                    currency:response.data.data
                }))

            })
            .catch(err => {
                dispatch(currencyFail(err.message))
            })

    }
}



