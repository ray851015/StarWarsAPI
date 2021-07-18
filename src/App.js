import "./App.css";
import Cardlist from "./Cardlist";
import Card from "./Cardlist";
import Header from "./Header";
import { useEffect, useState } from "react";

function App() {
  //region -- -- -- state -- -- --
  const [profile, setProfile] = useState([]);
  const { cardnumber, setCardNumber } = useState(10);
  //endregion

  //#region -- -- -- function -- -- --

  const getStartwarsapi = async () => {
    try {
      let response = await fetch("https://swapi.dev/api/people/");
      let data = await response.json();
      setProfile(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  //   const setMyName = () => {
  //     setProfile("newName");
  //   };

  //#endregion
  //#region -- -- -- lifecyclehook -- -- --

  useEffect(() => {
    getStartwarsapi();
  }, []);

  useEffect(() => {
    console.log("profile:", profile);
  });
  //endregion
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Body */}
      {profile.length > 0
        ? profile.map((eachProfile) => {
            return <Cardlist profile={eachProfile} />;
          })
        : ""}

      {/* Footer */}
    </div>
  );
}

export default App;
