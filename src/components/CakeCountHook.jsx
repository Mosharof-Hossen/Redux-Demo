import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/Cake/CakeAction'

function CakeCountHook() {
    const cakeNumber = useSelector((state)=>state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Hook Cake Count {cakeNumber}</h1>
            <button onClick = {()=>dispatch(buyCake())}>Buy</button>
        </div>
    )
}

export default CakeCountHook
