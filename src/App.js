import React, { useState, useEffect } from "react";
import Villagers from "./Villagers";

const url = "https://acnhapi.com/v1a/villagers";

function App() {
  const [villagers, setVillagers] = useState([]);

  const fetchVillagers = async () => {
    try {
      const response = await fetch(url);
      const villagers = await response.json();
      setVillagers(villagers);
      console.log(villagers[59]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVillagers();
  }, []);

  return (
    <div className="App">
      <Villagers villagers={villagers} />
    </div>
  );
}

export default App;
