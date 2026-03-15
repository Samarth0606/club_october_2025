import React from 'react'

function Search({restArray, setAllRestaurant}) {
    function handleRestSearch(searchedText){
        // console.log((searchedText));
        setAllRestaurant( restArray.filter((restaurant)=> restaurant.info.name.toLowerCase().includes(searchedText.toLowerCase())) )
    }
  return (
    <div>
        <input className='w-5/12 p-4 mx-8 my-2 border' onChange={(e)=>handleRestSearch(e.target.value)} type="text" placeholder='Search here...' />
    </div>
  )
}

export default Search