import React from "react";
import { atom, selector, useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import "./styles.css";

//Déclaration d'un Atom :
const tempFahrenheitState = atom({
  key: "tempFahrenheit",
  default: 0,
});

//un selector qui récupérera la valeur de l’état courant de
//notre atom tempFahrenheitState et qui s’occupera d’effectuer
//la conversion en degrés Celcius
const tempCelciusState = selector({
  key: "tempCelcius",
  // la fonction obligatoire “get” pour effectuer le calcul de conversion
  get: ({ get }) => Math.round(((get(tempFahrenheitState) - 32) * 5) / 9)
});

const inputState = selector({
  key: "inputTemp",
  get: ({ get }) => get(tempFahrenheitState),
  set: ({ set }, newValue) => set(tempFahrenheitState, newValue),
});

//un compteur pour modifier cet état
//On utilise le hook useRecoilState pour récupérer la valeur courante de l’état ainsi que son setter
const App = () => {
  const [tempFahrenheit, setTempFahrenheit] = useRecoilState(tempFahrenheitState);
  //utilisons le selector pour mettre à jours le composant App:
  const tempCelcius = useRecoilValue(tempCelciusState);
  const [input, setInput] = useRecoilState(inputState);
  // Ce hook permet de remettre à la valeur par défaut un state
  // en nous retournant une fonction de reset
  const reset = useResetRecoilState(inputState)
  return (
    <div className="App">
      <button onClick={() => setTempFahrenheit(tempFahrenheit + 1)}>+ Chaud</button>
      <button onClick={() => setTempFahrenheit(tempFahrenheit - 1)}>+ Froid</button>
      <input type="number" value={input} onChange={(e) => setInput(Number(e.target.value))} />
      <button onClick={() => reset()}>Reset</button>
      <div>Temperature in F°: {tempFahrenheit}</div>
      <div>Temperature in C°: {tempCelcius}</div>
    </div>
  );
};

export default App;
