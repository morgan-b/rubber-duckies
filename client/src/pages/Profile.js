import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../components/NavBar";
import ProfileCard from "../components/ProfileCard";
import ProfileWelcome from "../components/ProfileWelcome";
import "./style.css";
import Apiroutes from "../utils/Apiroutes";

function Profile() {
  const [users, setUsers] = useState([]);
  const [caregiver, setCaregiver] = useState([]);

  const history = useHistory();

  useEffect(() => {
    getCaregiver();
    getData();
  }, []);

  function getCaregiver() {
    Apiroutes.getCaregiver()
      .then((res) => {
        setCaregiver(res.data);
      })

      .catch((err) => console.log(err));
  }

  const getData = () => {
    Apiroutes.populateProfile()
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  const handleClick = (e, user) => {
    e.preventDefault();
    history.push({ pathname: "/userdetails", state: user });
  };

  return (
    <>
      <NavBar />
      <section className="Container m-4">
        <ProfileWelcome name={caregiver.firstname} />

        <section className="row text-center justify-content-center">
          <section className="row row-cols-1 row-cols-md-3 g-3 row-cols-lg-3 justify-content-center">
            {users.length ? (
              users.map((user) => (
                <section className="col">
                  <ProfileCard
                    id={user.id}
                    user={user}
                    handleClick={handleClick}
                    id={user.userid}
                    firstname={user.firstname}
                    lastname={user.lastname}
                  />
                </section>
              ))
            ) : (
              <ProfileCard
                id={1}
                firstname={"Please add users from the button above"}
              />
            )}
          </section>
        </section>
      </section>
    </>
  );
}
export default Profile;
