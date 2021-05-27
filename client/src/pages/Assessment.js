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
import Apiroutes from "../utils/Apiroutes";
import "./style.css";

//array to hold all wants and needs we need to loop through
const emneeds = ["Hungry", "Thirsty", "Restroom", "Happy", "Sad", "Nervous"];

function Assessment() {
  const [formObject, setFormObject] = useState({});
  const [resCards, setResCards] = useState([]);
  const [emIndex, setEmIndex] = useState(0);
  const [emType, setEmType] = useState();
  const history = useHistory();

  const [userChoice, setUserChoice] = useState({
    hungry: '',
    thirsty:'',
    restroom:'',
    happy:'',
    sad:'',
    nervous:''
  });


  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, value });
    console.log(formObject);
  }

  function onSave(e, link) {
    console.log("LINK:", link)
    e.preventDefault();

    if (emIndex < emneeds.length - 1) {
     setUserChoice({...userChoice,[emneeds[emIndex].toLowerCase()]: link})
      setEmIndex(emIndex + 1);


      //set resCards to empty so cards revert to colors for next question
      setResCards([]);
    } else {
      console.log(userChoice)

      //using placeholder integar to check that backend route working
      //need to figure out how to pass actual user id to backend
      let userid = 2
      //Save user response
      Apiroutes.assessmentSave(userid, userChoice);
      history.push("/home");
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
              link={"../assets/red.jpg"}
              key={1} 
              thumbnail={red} 
              onSave={onSave}>

              </AssessCard>
            </div>
            <div className="col imgcol">
              <AssessCard 
              link={"../assets/blue.png"}
              key={2} 
              thumbnail={blue} 
              onSave={onSave}></AssessCard>
            </div>
            <div className="col imgcol">
              <AssessCard
                link={"../assets/yellow.jpg"}
                key={3}
                thumbnail={yellow}
                onSave={onSave}
              ></AssessCard>
            </div>
            <div className="col imgcol">
              <AssessCard
              link={"../assets/purple.jpg"}
                key={4}
                thumbnail={purple}
                onSave={onSave}
              ></AssessCard>
            </div>
            <div className="col imgcol">
              <AssessCard
              link={"../assets/black.png"}
                key={5}
                thumbnail={black}
                onSave={onSave}
              ></AssessCard>
            </div>
            <div className="col imgcol">
              <AssessCard
              link={"../assets/green.jpg"}
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
