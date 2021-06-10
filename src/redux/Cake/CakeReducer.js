import { BUY_CAKE } from "./CakeTypes";

const initialCakeState = {
    numOfCakes: 20
}
export const cakeReducer = (state = initialCakeState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload
            }

        default:
            return state;
    }
}