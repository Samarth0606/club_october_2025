import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ApiCalling() {
    const [data,setData] = useState([]);
    // 4. axios with async-await
    useEffect(()=>{
        const API="https://jsonplaceholder.typicode.com/todos"
        async function calling(){
            const resp = await axios.get(API)
            setData(resp.data)
        }
        calling()
    }, [])

  return (
    <div>
        {
            data.map((item)=>{
                return(
                    <div>
                        <h1>{item.title}</h1>
                        <h1>{JSON.stringify(item.completed)}</h1>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ApiCalling


// --------------------------------------------
// 1. fetch with promise
// useEffect(()=>{
    //     const API="https://jsonplaceholder.typicode.com/todos"
    //     fetch(API) //partial data
    //     .then((data)=>{ return data.json() })
    //     .then((result)=>{ setData(result) })
    //     .catch((err)=>{ console.log(err) })
    // }, [])


// 2. fetch with async await
// useEffect(()=>{
//         async function calling(){
//             const API="https://jsonplaceholder.typicode.com/todos"
//             const data = await fetch(API) //partial data
//             const resp = await data.json()
//             setData(resp)
//         }
//         calling()
//     }, [])

// 3. axios with promise
// useEffect(()=>{
//         const API="https://jsonplaceholder.typicode.com/todos"
//         axios.get(API) //entire data at once
//         .then((resp)=>{setData(resp.data) })
//         .catch((err)=>{console.log(err) })
//     }, [])