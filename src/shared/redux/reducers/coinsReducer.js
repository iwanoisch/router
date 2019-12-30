import {FETCH_COINS_SUCCESS} from "../actions/actionTypes";
import {getNewState} from '../../utils/frontend'
const initialState = {
    coins: []
};


export default function coinsReducer(
    state = initialState,
    action
) {
    switch (action.type) {
        case FETCH_COINS_SUCCESS:
            // const { payload: coins } = action;
            const coins = action.payload;

            return getNewState(state, {
                coins
            });

        default:
            return state
    }
};
