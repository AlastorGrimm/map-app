import React, { useState } from "react";
import Header from "./components/header";
import TravelList from "./components/travelList";
import * as TravelApi from "./api/travel.api";

const App = () => {
  const [travellings, setTravellings] = useState(TravelApi.fetchAll());

  const handleDeleteTravel = (id) => {
    let newTravellings = [...travellings];
    newTravellings = newTravellings.filter((t) => t.id !== id);
    setTravellings(newTravellings);
  };
  return (
    <div>
      <Header />
      <TravelList data={travellings} onDelete={handleDeleteTravel} />
    </div>
  );
};

export default App;
