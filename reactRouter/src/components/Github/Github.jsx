import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch("https://api.github.com/users/devarshi002")
        .then(Response=>Response.json())
        .then(data=>{
            setData(data)
        })
    },[])
    return (
        <div className=' text-center m-4 bg-gray-600 text-white o-4 text-3xl'>Github followers : {data.followers}
        <img src={data.avatar_url} alt="Git picture" /></div>
    )
}

export default Github
