import { useState } from "react";
import { restrauntList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { filterData } from "../config";


const Body = () => {

  const [searchInput, setSearchInput] = useState();

  const [restaurants, setRestaurants] = useState(restrauntList);

    return (
      <>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search" value={searchInput} 
          onChange={(e) => {
            setSearchInput(e.target.value);
          }} />
          <button className="search-btn" onClick={() => {
            //need to filter some data
            const data = filterData(searchInput, restaurants);
            //update the state - restaurants
            setRestaurants(data);
          }}>Search</button>
        </div>
        <div className="restaurant-list">
             {
                restaurants.map((restaurant) => {
                  return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                  }
                )
           }
        </div>
      </>  
    )
}

export default Body;