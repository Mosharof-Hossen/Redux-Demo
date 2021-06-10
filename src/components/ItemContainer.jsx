import React from 'react'
import { useSelector } from 'react-redux'

function ItemContainer() {
    const Cake  = useSelector(state=>state.cake.numOfCakes)
    const iceCream = useSelector(state=>state.iceCreame.numOfIcecream)
    return (
        <div>
            <h1>Total Cakes {Cake}</h1>
            <h1>Total IceCream {iceCream}</h1>
        </div>
    )
}

export default ItemContainer
