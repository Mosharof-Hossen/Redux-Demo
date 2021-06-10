import { BUY_CAKE } from "./CakeTypes"

export const buyCake = (number ) => {
    console.log(number)
    return {
        type: BUY_CAKE,
        payload: number
    }
}