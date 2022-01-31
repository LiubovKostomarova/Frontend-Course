import React from "react";

import "./App.css";
import "./components/Card.scss";
import Card from "./components/Card";

const items = [
  {
    cost: 300,
    speed: "10Mb/sec",
    selected: false,
  },
  {
    cost: 450,
    speed: "50Mb/sec",
    selected: false,
  },
  {
    cost: 550,
    speed: "100Mb/sec",
    selected: true,
  },
  {
    cost: 1000,
    speed: "200Mb/sec",
    selected: false,
  },
];

function App() {
  return (
    <div className="App">
      <div className="container">
        {items.map((item) => (
          <Card
            key={item.cost}
            cost={item.cost}
            speed={item.speed}
            selected={item.selected}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
