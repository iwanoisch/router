import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from './reducers/index'
import thunk from "redux-thunk";


export default function configureStore() {

    const middleware = [thunk];

    const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    return createStore(
        rootReducer,
        composeEnhancer(applyMiddleware(...middleware))
    )
}
