import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

export const assetsStart = () => {
    return {
        type:actionTypes.ASSETS_START
    }
}

export const  assetsSuccess = (data) => {
    return {
        type:actionTypes.ASSETS_SUCCESS,
        assets:data.assets
    }
}

export const assetsFail = (error) => {
    return {
        type:actionTypes.ASSETS_FAIL,
        error: error
    }
}

export const assets = () => {

    return dispatch => {

        dispatch(assetsStart())
 
        axios.get('v2/assets/?limit=10')

            .then(response => {
           
                dispatch(assetsSuccess({
                    assets:response.data.data
                }))

            })
            .catch(err => {
                dispatch(assetsFail(err.message))
            })

    }
}


