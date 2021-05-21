import React, { useState } from "react";
import AssessCard from "../components/AssessmentCard";
import NavBar from "../components/NavBar";
import AssessWrapper from "../components/AssessmentWrapper";
import SearchApi from "../utils/SearchApi";
import BlankImage from "../assets/blank-square.jpg";

function Assessment() {
  const [formObject, setFormObject] = useState({});
  const [resCards, setResCards] = useState([]);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
    console.log(formObject)
  }

  function onClick() {


        
      }


  function handleFormSubmit(event) {
    event.preventDefault();
    SearchApi.GetImages()

    .then((response) => setResCards(response.data.value))
    .then(() => console.log(resCards))
    .catch((err) => console.log(err));

  }
  return (
    <div className="Container">
      <NavBar />
      <AssessWrapper onClick={handleFormSubmit}
      onChange={handleInputChange}>

{resCards.length ? (
          resCards.map((resCard) => (
        <div className="col">
          <AssessCard key={resCard.thumbnail} id={resCard.thumbnail} thumbnail={resCard.thumbnail}></AssessCard>
        </div>
          ))
          ) : (
              <div>
            <div className="col">
            <AssessCard thumbail={BlankImage}></AssessCard>
          </div>
          <div className="col">
          <AssessCard ></AssessCard>
        </div>
        <div className="col">
        <AssessCard ></AssessCard>
      </div>
      <div className="col">
      <AssessCard ></AssessCard>
    </div>
    <div className="col">
    <AssessCard ></AssessCard>
  </div>
  <div className="col">
  <AssessCard ></AssessCard>
</div>
</div>
 )}
 </AssessWrapper>
 </div>
    

   
  );
}
export default Assessment;
