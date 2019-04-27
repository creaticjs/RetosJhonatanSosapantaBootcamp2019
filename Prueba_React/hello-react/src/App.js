    
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Persona from "./components/Persona";

function App() {
  const [statePersonas, changeStatePersonas] = useState([
    { nombre: "Carlos", genero: "Masculino" },
    { nombre: "Camilo", genero: "Masculino" },
    { nombre: "Javier", genero: "Masculino" }
  ]);
  const [stateView, changeStateView] = useState({
    view: true
  });

  const evetoHacerAlgo = event => {
    console.log("hacer algo");
    changeStatePersonas([{ nombre: event.target.value, genero: "Masculino" }]);
  };
  const eventoToggleView = () => {
    const cloneView = stateView.view;
    changeStateView({ view: !cloneView });

    console.log(stateView.view);
  };

  return (
    <div className="App">
      <button onClick={eventoToggleView}>Toggle View</button>
      {stateView.view
        ? statePersonas.map((persona, index) => {
            return (
              <Persona
                key={index}
                cambiar={evetoHacerAlgo}
                nombre={persona.nombre}
                genero={persona.genero}
              />
            );
          })
        : null}
    </div>
  );
}

export default App;