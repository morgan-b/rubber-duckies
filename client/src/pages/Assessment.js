import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
import Hungry from "../assets/Hungry.png"
import Thirsty from "../assets/Thirsty.png"
import Restroom from "../assets/Restroom.png"
import Happy from "../assets/Happy.png"
import Sad from "../assets/Sad.png"
import Nervous from "../assets/Nervous.png"
import Apiroutes from "../utils/Apiroutes";
import "./style.css";

//array to hold all wants and needs we need to loop through
const emneeds = ["Hungry", "Thirsty", "Restroom", "Happy", "Sad", "Nervous"];
const emImages = [Hungry, Thirsty, Restroom, Happy, Sad, Nervous]
function Assessment() {
  const [formObject, setFormObject] = useState({});
  const [resCards, setResCards] = useState([]);
  const [emIndex, setEmIndex] = useState(0);
  const [emType, setEmType] = useState();
  const history = useHistory();

  const [userChoice, setUserChoice] = useState({
    hungry: "",
    thirsty: "",
    restroom: "",
    happy: "",
    sad: "",
    nervous: "",
  });
  // nervouse is not being added

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, value });
    console.log(formObject);
  }

  function onSave(e, link) {
    console.log("LINK:", link);
    let choices = userChoice
    e.preventDefault();


    choices[emneeds[emIndex].toLowerCase()] = link

    setUserChoice(choices);


    if (emIndex < emneeds.length - 1) {
      setEmIndex(emIndex + 1);

      console.log(userChoice);

      //set resCards to empty so cards revert to colors for next question
      setResCards([]);

    } else {
   
      Apiroutes.assessmentSave(userChoice);
      history.push("/home");
      console.log(userChoice);
      //using placeholder integar to check that backend route working
      //need to figure out how to pass actual user id to backend

      //Save user response
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
  
        
       
      <AssessWrapper
        onSearch={handleFormSubmit}
        onChange={handleInputChange}
        emotionNeeds={emneeds[emIndex]}
        onSave={onSave}
        link={emImages[emIndex]}
  
      
      >
       
     
      
        {resCards.length ? (
          resCards.map((resCard) => (
            <div className="col imgcol">
              <AssessCard
                onClick={onSave}
                link={resCard.thumbnail}
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
              <AssessCard
                link={red}
                key={1}
                thumbnail={red}
                onSave={onSave}
              ></AssessCard>
            </div>
            <div className="col imgcol">
              <AssessCard
                link={blue}
                key={2}
                thumbnail={blue}
                onSave={onSave}
              ></AssessCard>
            </div>
            <div className="col imgcol">
              <AssessCard
                link={yellow}
                key={3}
                thumbnail={yellow}
                onSave={onSave}
              ></AssessCard>
            </div>
            <div className="col imgcol">
              <AssessCard
                link={purple}
                key={4}
                thumbnail={purple}
                onSave={onSave}
              ></AssessCard>
            </div>
            <div className="col imgcol">
              <AssessCard
                link={black}
                key={5}
                thumbnail={black}
                onSave={onSave}
              ></AssessCard>
            </div>
            <div className="col imgcol">
              <AssessCard
                link={green}
                key={6}
                thumbnail={green}
                onSave={onSave}
              ></AssessCard>
            </div>
          </>
        )}
     
      </AssessWrapper>
    
    </div>
   
  
  );
        
}

export default Assessment;
