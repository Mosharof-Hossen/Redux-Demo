import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIcecream } from '../redux/IceCream/IceCreamAction'

function IceCreamCounter() {
    const iceCreamNumber = useSelector(state=>state.iceCreame.numOfIcecream)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Number of IceCream-{iceCreamNumber}</h1>
            <button onClick = {()=>dispatch(buyIcecream())}>Buy IceCream</button>
        </div>
    )
}

export default IceCreamCounter
