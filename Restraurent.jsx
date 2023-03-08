import React from "react";
import "./Restraurent.css";

function Restraurent(){
    const BurgerKing={
        name:"Burger King",
        image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/mtyg167wtmqmcdepylrz",
        cusines:["Burger","American"],
        rating:"4.2"
    }
    return(
        <div className="Hotellist">
        <img src={BurgerKing.image} alt='img'/>
          <h2>{BurgerKing.name}</h2>
          <h3>{BurgerKing.cusines.join(",")}</h3>
          <h4>{BurgerKing.rating} star</h4>
          </div>
        );
}
export default Restraurent;