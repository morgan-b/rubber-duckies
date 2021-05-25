import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import AssessCard from "../components/AssessmentCard";
import NavBar from "../components/NavBar";
import AssessWrapper from "../components/AssessmentWrapper";
import SearchApi from "../utils/SearchApi";
import red from "../assets/red.jpg";
import blue from "../assets/blue.png";
import yellow from "../assets/yellow.jpg";
import purple from "../assets/purple.jpg";
import green from "../assets/green.jpg";
import black from "../assets/black.png";
import Apiroutes from "../utils/Apiroutes"



const emneeds = ["hungry", "thirsty" ,"restroom", "happy","sad","nervous"]



function Assessment() {
  const [formObject, setFormObject] = useState({});
  const [resCards, setResCards] = useState([]);
  const [emIndex, setEmIndex] = useState(0);
  const [emType, setEmType] = useState();
  const history = useHistory();
  


  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, value });
    console.log(formObject);
  }

  function onSave(event){
    event.preventDefault();
    // Apiroutes.assessmentSave
if (emIndex < (emneeds.length-1)) {setEmIndex(emIndex+1)
  Apiroutes.assessmentSave}
else
{history.push("/home")
}
  }

  function handleFormSubmit(event) {


    event.preventDefault();
    SearchApi.GetImages(formObject.value)

      .then((response) => setResCards(response.data.value))
      .then(() => console.log(resCards))
      .catch((err) => console.log(err));
  }
  return (
    <div className="Container">
      <NavBar />
 
    
      <AssessWrapper onClick={onSave} onSearch={handleFormSubmit} onChange={handleInputChange} emotionNeeds={emneeds[emIndex]}>
        {resCards.length ? (
          resCards.map((resCard) => (
            <div className="col imgcol">
              <AssessCard
                key={resCard.thumbnail}
                id={resCard.thumbnail}
                thumbnail={resCard.thumbnail}
                onSave={onSave}
              ></AssessCard>
            </div>
          ))
        ) : (
          <>
            <div className="col imgcol">
              <AssessCard key={1} thumbnail={red} onSave={onSave}></AssessCard>
            </div>
            <div className="col imgcol">
              <AssessCard key={2} thumbnail={blue} onSave={onSave}></AssessCard>
            </div>
            <div className="col imgcol">
              <AssessCard key={3} thumbnail={yellow} onSave={onSave}></AssessCard>
            </div>
            <div className="col imgcol">
              <AssessCard key={4} thumbnail={purple} onSave={onSave}></AssessCard>
            </div>
            <div className="col imgcol">
              <AssessCard key={5} thumbnail={black} onSave={onSave}></AssessCard>
            </div>
            <div className="col imgcol">
              <AssessCard key={6} thumbnail={green} onSave={onSave}></AssessCard>
            </div>
          </>
        )}
      </AssessWrapper>

    </div>
  );
}
export default Assessment;
