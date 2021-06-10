import { combineReducers } from "redux";
import { cakeReducer } from "./Cake/CakeReducer";
import { icecreamReducer } from "./IceCream/IcreCreamReducer";
import { UserReducer } from "./User/UserReducer";

export const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCreame: icecreamReducer,
    user: UserReducer
})