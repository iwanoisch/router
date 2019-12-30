import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

// https://www.mocky.io/ https://api.coinmarketcap.com/v1/ticker/
export const restapi = axios.create({
    baseURL: 'http://www.mocky.io/v2/',
});

restapi.interceptors.response.use( response => {
    return response;
}, (error) => {
    console.log('errore restApi', error);
    return Promise.reject(error)
});
