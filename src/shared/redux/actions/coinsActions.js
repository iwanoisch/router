import axios from 'axios';

import {error, received, request} from "../baseActions";
import {FETCH_COINS_ERROR, FETCH_COINS_REQUEST, FETCH_COINS_SUCCESS} from "./actionTypes";


export const fetchCoins = () => dispatch => {
    dispatch(request(FETCH_COINS_REQUEST));

    const axiosData = {
        method: 'GET',
        url: 'https://api.coinmarketcap.com/v1/ticker/',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    };

    return axios(axiosData)
        .then(response => dispatch(received(FETCH_COINS_SUCCESS, response.data)))
        .catch(err => {
            console.log('AXIOS ERROR:', err.response);
            dispatch(error(FETCH_COINS_ERROR))
        })
};
