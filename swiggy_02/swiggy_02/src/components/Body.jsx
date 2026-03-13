import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import ApiCalling from './ApiCalling'
import Search from './Search';

function Body() {
    const restArray = ApiCalling();
    const [allRestaurant,setAllRestaurant] = useState(restArray)
    const [isClicked1,setIsClicked1] = useState(false)
    const [isClicked2,setIsClicked2] = useState(false)

    useEffect(()=>{
      if(restArray && restArray.length){
        setAllRestaurant(restArray)
      }
    }, [restArray])

    function filterTopRestaurant(restArray){
      setAllRestaurant(restArray.filter((restaurant)=> restaurant.info.avgRating>=4.3) )
      setIsClicked1(true)
      setIsClicked2(false)
    }
    function resetFilter(restArray){
      setAllRestaurant(restArray)
      setIsClicked1(false)
      setIsClicked2(true)
    }
  return (
    <div>
        <h1 className='font-bold text-2xl m-8'>Restaurants with online food delivery in Chhindwara</h1>
        <button onClick={()=>filterTopRestaurant(restArray)} className={isClicked1? 'border bg-amber-200 rounded w-1/12 ml-20 text-xl p-2' : 'border rounded w-1/12 ml-20 text-xl p-2' }  >Rating 4.3+</button>
        <button onClick={()=>resetFilter(restArray)} className={isClicked2 ? 'border bg-amber-200 rounded w-1/12 ml-10 text-xl p-2' : 'border rounded w-1/12 ml-10 text-xl p-2' } >Reset</button>
        <div> 
          <Search restArray={restArray} setAllRestaurant={setAllRestaurant}  /> 
        </div>
        <div className='flex flex-wrap w-10/12 m-auto'>
            <RestaurantCard restArray={allRestaurant} />
        </div>
    </div>
  )
}

export default Body