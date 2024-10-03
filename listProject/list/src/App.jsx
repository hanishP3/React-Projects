import React from "react";

function App() {
  let superHerosList = [
    "Lucky man",
    "Doraemon",
    "Batman",
    "Spider man",
    "Invincible",
    "One punch man",
  ];

  return (
    <>
      <h1>Super Heros</h1>
      <ul className="list-group">
        {superHerosList.map((superhero) => (
          <li className="list-group-item">{superhero}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
