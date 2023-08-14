import React from "react";
import ReactDOM from "react-dom/client";
//default import
import Header from "./components/Header";
//named import
import { Title } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";


/*
   Header
     - Logo
     - NavItems
     - Cart
   Body
     - Search Bar
     - RestaurantList
       - RestaurantCard
         - Image
         - Name
         - Rating
         - Cuisines
   Footer
     - Links
     - Copyright
*/






//Destructuring  

// const RestaurantCard = ({ restaurant }) => {
//     return (
//     <div className="card">
//       <img src={
//         "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
//         restaurant.data?.cloudinaryImageId} alt="restaurant-logo" />
//       <h2>{restaurant.data?.name}</h2>
//       <h3>{restaurant.data?.cuisines.join(", ")}</h3>
//       <h4>{restaurant.data?.lastMileTravelString}</h4>
//     </div>
//     )
// };

//Another Way


// const RestaurantCard = (props) => {
//     return (
//     <div className="card">
//       <img src={
//         "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
//         props.restaurant.data?.cloudinaryImageId} alt="restaurant-logo" />
//       <h2>{props.restaurant.data?.name}</h2>
//       <h3>{props.restaurant.data?.cuisines.join(", ")}</h3>
//       <h4>{props.restaurant.data?.lastMileTravelString}</h4>
//     </div>
//     )
// };





const AppLayout = () => (
    <>
    <Header />
    <Body />
    <Footer />
    </>
)



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);