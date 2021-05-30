import React, { useState, useEffect } from "react";
import HomeCard from "../components/HomeCard";
import popupS from "popups";
import placeholder from "../assets/blue.png";
import NavBar from "../components/NavBar";
import Apiroutes from "../utils/Apiroutes";
import red from "../assets/red.jpg";
import blue from "../assets/blue.png";
import yellow from "../assets/yellow.jpg";
import purple from "../assets/purple.jpg";
import green from "../assets/green.jpg";
import black from "../assets/black.png";



function onClick(e, title, thumbnail){
  let heading= title;
  let image = thumbnail;
    popupS.modal({
        title:   heading,
        content: {
            tag: heading,
            src: image
            // props.communication_image
        }
    });
}
function Homepage() {

const [user, setUser]= useState([])

useEffect(() => {
  getUserEmotions()
}, []);

const getUserEmotions = () => {
  Apiroutes.getUserData()
  .then (res => {
    console.log(res.data)
    setUser(res.data)
    })
     
    .catch(err => console.log(err))
}

  return (
    <>
    <NavBar/>
      <div className="container">
    <div className="row row-cols-1 row-cols-md-3 g-3 row-cols-lg-3">

        <div className="col">
          <HomeCard 
          id={user.userid +1}
          title={"Happy"}
          onClick={onClick}
          thumbnail={user.happy}
          />
        </div>

        <div className="col">
          <HomeCard 
          id={user.userid +2}
          title={"Sad"}
          onClick={onClick}
          thumbnail={user.sad}
          />
        </div>

        <div className="col">
          <HomeCard 
          id={user.userid +3}
          title={"Nervous"}
          onClick={onClick}
          thumbnail={user.nervous}
          />
        </div>

        <div className="col">
          <HomeCard 
          id={user.userid +4}
          title={"Hungry"}
          onClick={onClick}
          thumbnail={user.hungry}
          />
        </div>

        <div className="col">
          <HomeCard 
          id={user.userid +5}
          title={"Thirsty"}
          onClick={onClick}
          thumbnail={user.thirsty}
          />
        </div>

        <div className="col">
          <HomeCard 
          id={user.userid +6}
          title={"Restroom"}
          onClick={onClick}
          thumbnail={user.restroom}
          />
        </div>
        
        

    </div>
    </div>
    </>
  );
}
export default Homepage;
