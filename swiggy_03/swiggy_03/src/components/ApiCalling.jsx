import React, { useEffect, useState } from 'react'
import axios from "axios";

function ApiCalling() {
    let [allRestaurantArr,setAllRestaurantArr] = useState([]);

    useEffect(()=>{
        async function calling(){
            const API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            let resp = await axios.get(API);
            console.log(resp.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants , "123");  
            setAllRestaurantArr(resp.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        }
        calling()
    },[])

  return allRestaurantArr;
}

export default ApiCalling