import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/Cake/CakeAction'
import { buyIcecream } from '../redux/IceCream/IceCreamAction'

function NewCakeContainer() {
    const cakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    const [number ,setNumber] = useState(1)
    console.log(number)
    return (
        <div>
            <h1>Number of Cakes {cakes}</h1>
            <input type="text" value={number} onChange = {e=>setNumber(e.target.value)} />
            <button onClick={()=>dispatch(buyCake(number))}>Buy {number} cake</button>
        </div>
    )
}

export default NewCakeContainer
