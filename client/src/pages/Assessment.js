import React, { useState } from "react";
import AssessCard from "../components/AssessmentCard";
import NavBar from "../components/NavBar";
import AssessWrapper from "../components/AssessmentWrapper";
import SearchApi from "../utils/SearchApi";
import BlankImage from "../assets/blank-square.jpg";

function Assessment() {
  const [formObject, setFormObject] = useState({});
  const [resCards, setResCards] = useState([]);
  const [search, setSearch] = useState([]);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, value });
    console.log(formObject);
  }

  function onClick() {}

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
      <AssessWrapper onClick={handleFormSubmit} onChange={handleInputChange}>
        {resCards.length ? (
          resCards.map((resCard) => (
            <div className="col imgcol">
              <AssessCard
                key={resCard.thumbnail}
                id={resCard.thumbnail}
                thumbnail={resCard.thumbnail}
              ></AssessCard>
            </div>
          ))
        ) : (
          <>
            <div className="col imgcol">
              <AssessCard key={1} thumbnail={BlankImage}></AssessCard>
            </div>
            <div className="col imgcol">
              <AssessCard key={2} thumbnail={BlankImage}></AssessCard>
            </div>
            <div className="col imgcol">
              <AssessCard key={3} thumbnail={BlankImage}></AssessCard>
            </div>
            <div className="col imgcol">
              <AssessCard key={4} thumbnail={BlankImage}></AssessCard>
            </div>
            <div className="col imgcol">
              <AssessCard key={5} thumbnail={BlankImage}></AssessCard>
            </div>
            <div className="col imgcol">
              <AssessCard key={6} thumbnail={BlankImage}></AssessCard>
            </div>
          </>
        )}
      </AssessWrapper>
    </div>
  );
}
export default Assessment;
