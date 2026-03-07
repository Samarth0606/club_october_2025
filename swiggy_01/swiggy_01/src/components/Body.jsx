import React from 'react'
import RestaurantCard from './RestaurantCard'

function Body() {
  return (
    <div>
        <h1 className='font-bold text-2xl m-8'>Restaurants with online food delivery in Chhindwara</h1>
        <button className='border rounded w-1/12 ml-20 text-xl p-2' >Rating 4.3+</button>
        <button className='border rounded w-1/12 ml-10 text-xl p-2' >Reset</button>
        <div className='flex flex-wrap w-10/12 m-auto'>
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
        </div>
    </div>
  )
}

export default Body