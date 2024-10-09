import React from "react";
import Body from "./assets/components/Body";
import Empty from "./assets/components/Empty";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let superHerosList = [
    "Lucky man",
    "Doraemon",
    "Batman",
    "Spider man",
    "Invincible",
    "One punch man",
    "Shinchan",
    "Hangman"
  ];

  return (
    <>
      <h1>Super Heros</h1>
      <ul className="list-group">
        <Body listitems={superHerosList}/>
      </ul>
      <Empty listitems={superHerosList}/>
    </>
  );
}

export default App;
