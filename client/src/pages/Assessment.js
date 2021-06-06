import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AssessCard from "../components/AssessmentCard";
import NavBar from "../components/NavBar";
import AssessWrapper from "../components/AssessmentWrapper";
import red from "../assets/red.jpg";
import blue from "../assets/blue.png";
import yellow from "../assets/yellow.jpg";
import purple from "../assets/purple.jpg";
import green from "../assets/green.jpg";
import black from "../assets/black.png";
import Hungry from "../assets/Hungry.png";
import Thirsty from "../assets/Thirsty.png";
import Restroom from "../assets/Restroom.png";
import Happy from "../assets/Happy.png";
import Sad from "../assets/Sad.png";
import Nervous from "../assets/Nervous.png";
import Apiroutes from "../utils/Apiroutes";
import "./style.css";
import { createClient } from "pexels";

//array to hold all wants and needs we need to loop through
const emneeds = ["Hungry", "Thirsty", "Restroom", "Happy", "Sad", "Nervous"];
const emImages = [Hungry, Thirsty, Restroom, Happy, Sad, Nervous];
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

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, value });
  }

  function onSave(e, link) {
    let choices = userChoice;
    e.preventDefault();

    choices[emneeds[emIndex].toLowerCase()] = link;

    setUserChoice(choices);

    if (emIndex < emneeds.length - 1) {
      setEmIndex(emIndex + 1);

      //set resCards to empty so cards revert to colors for next question
      setResCards([]);
    } else {
      Apiroutes.assessmentSave(userChoice);
      history.push("/home");
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const client = createClient(
      "563492ad6f917000010000017249237531774afd843890629876d160"
    );
    const query = formObject.value;

    client.photos.search({ query, per_page: 6 }).then((photos) => {
      setResCards(photos.photos);
    });
  }

  return (
    <section className="Container">
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
            <section className="col imgcol">
              <AssessCard
                onClick={onSave}
                link={resCard.src.portrait}
                key={resCard.id}
                id={resCard.id}
                thumbnail={resCard.src.portrait}
                onSave={onSave}
              ></AssessCard>
            </section>
          ))
        ) : (
          <>
            <section className="col imgcol">
              <AssessCard
                link={red}
                key={1}
                thumbnail={red}
                onSave={onSave}
              ></AssessCard>
            </section>
            <section className="col imgcol">
              <AssessCard
                link={blue}
                key={2}
                thumbnail={blue}
                onSave={onSave}
              ></AssessCard>
            </section>
            <section className="col imgcol">
              <AssessCard
                link={yellow}
                key={3}
                thumbnail={yellow}
                onSave={onSave}
              ></AssessCard>
            </section>
            <section className="col imgcol">
              <AssessCard
                link={purple}
                key={4}
                thumbnail={purple}
                onSave={onSave}
              ></AssessCard>
            </section>
            <section className="col imgcol">
              <AssessCard
                link={black}
                key={5}
                thumbnail={black}
                onSave={onSave}
              ></AssessCard>
            </section>
            <section className="col imgcol">
              <AssessCard
                link={green}
                key={6}
                thumbnail={green}
                onSave={onSave}
              ></AssessCard>
            </section>
          </>
        )}
      </AssessWrapper>

      <section className="row mt-4 mb-3 text-center">
        <a className="text-dark" href="https://www.pexels.com">
          Photos provided by Pexels
        </a>
      </section>
    </section>
  );
}

export default Assessment;
