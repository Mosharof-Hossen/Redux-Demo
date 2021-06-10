import { BUY_ICECREAM } from "./IceCreameTypes";

const initialIcecreamState = {
    numOfIcecream:5
}

export const icecreamReducer = (state = initialIcecreamState,action)=>{
    switch (action.type) {
        case BUY_ICECREAM:
            return{
                ...state,
                numOfIcecream:state.numOfIcecream - 1
            }
    
        default:
            return state
    }
}