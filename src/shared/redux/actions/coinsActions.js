import {restapi} from '../../../store/restapi/restapi'

import { FETCH_COINS_REQUEST, FETCH_COINS_SUCCESS} from "./actionTypes";

export function fetchCoins() {
    return async (dispatch) => {
        dispatch(fetchRequest());
        const res = await restapi.get('/5e06227e3300000eddec5c9f');
       // console.log('axios', res);
        dispatch(getFetch(res.data))
    }
}

export function fetchRequest() {
    return {
        type: FETCH_COINS_REQUEST
    }
}

export function getFetch(coins) {
        return {
            type: FETCH_COINS_SUCCESS,
            payload: {
                coins: coins
            }
        }
}


// export function fetchCoins() {
//     return async (dispatch) => {
//         const axiosData = await restapi.get('/users');
//
//     return axios(axiosData)
//         .then(response => dispatch(received(FETCH_COINS_SUCCESS, response.data)))
//         .catch(err => {
//             console.log('AXIOS ERROR:', err.response);
//             dispatch(error(FETCH_COINS_ERROR))
//         })
//     };
// }

//
// export function fetchCoins() {
//     return async (dispatch) => {
//         dispatch(request(FETCH_COINS_REQUEST));
//         const axiosData = await restapi.get('/5e06227e3300000eddec5c9f');
//         console.log('axios', axiosData);
//         return axios(axiosData.data)
//             .then(response => dispatch(received(FETCH_COINS_SUCCESS, response.data)))
//             .catch(err => {
//                 console.log('AXIOS ERROR:', err.response);
//                 dispatch(error(FETCH_COINS_ERROR))
//             })
//     };
// }


// export  const  fetchCoins = () => dispatch => {
//     dispatch(request(FETCH_COINS_REQUEST));
// // https://api.coinmarketcap.com/v1/ticker/
//     const axiosData = {
//         method: 'GET',
//         url: 'http://www.mocky.io/v2/5e06227e3300000eddec5c9f',
//     };
//
//     return axios(axiosData)
//         .then(response => dispatch(received(FETCH_COINS_SUCCESS, response.data)))
//         .catch(err => {
//             console.log('AXIOS ERROR:', err.response);
//             dispatch(error(FETCH_COINS_ERROR))
//         })
// };

//export  const  fetchCoins = () => async dispatch => {
//     dispatch(request(FETCH_COINS_REQUEST));
// // https://api.coinmarketcap.com/v1/ticker/
//     const axiosData = {
//         method: 'GET',
//         url: await restapi.get('/ticker'),
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json'
//         }
//     };
//
//     return axios(axiosData)
//         .then(response => dispatch(received(FETCH_COINS_SUCCESS, response.data)))
//         .catch(err => {
//             console.log('AXIOS ERROR:', err.response);
//             dispatch(error(FETCH_COINS_ERROR))
//         })
// };
