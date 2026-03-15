import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function RestaurantDetails() {
    const [foodItems,setFoodItem] = useState([])
    const {id} = useParams()
    // console.log(id);
    useEffect(()=>{
        async function calling(){
            const API = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=24.58540&lng=73.71410&restaurantId=${id}&submitAction=ENTER`
            let resp = await axios.get(API)
            setFoodItem(resp.data.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[9].card.card.itemCards);
            
            // setFoodItem(resp.data.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards); 
        }
        calling()
    }, [id])

  return (
    <div>
        <h1 className='text-center font-bold text-2xl'>List of item's avaialable at restaurant</h1>
        {
            foodItems.map((foodItem)=>{
                return (
                    <div className="flex w-3/4 mx-auto mb-10 border-b-4 p-4">
                        <div className="flex flex-col w-3/4">
                        <h1>{foodItem.card.info.name}</h1>
                        <h1>{foodItem.card.info.price / 100} \-</h1>
                        <h1>{foodItem.card.info.category}</h1>
                        </div>
                        <img
                        className="w-52 h-44 rounded-md border shadow-lg border-gray-100"
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${foodItem.card.info.imageId}`}
                        alt=""
                        />

                        <button
                        className="border bg-green-300 h-8 relative top-16 right-5"
                        >
                        Add +
                        </button>
                    </div>
                );
            })
        }
    </div>
  )
}

export default RestaurantDetails