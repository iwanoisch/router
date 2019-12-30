import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import coinsReducer from "./reducers/coinsReducer";


const rootReducer = combineReducers({
    coins: coinsReducer
});


export default function configureStore() {

   // const middleware = [thunk];

    const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    return createStore(
        rootReducer,
        composeEnhancer(applyMiddleware(thunk))
    )
}
