import React, { useEffect } from 'react'

function UserContainer() {
    useEffect(()=>{
        fetch("https://jsonplaceholder.typiode.com/users")
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(error=>console.log(error.message))
    })
    return (
        <div>
            <h1>User Data</h1>
        </div>
    )
}

export default UserContainer
