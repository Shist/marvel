import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App";
import MarvelService from "./services/MarvelService";
import "./style/style.scss";

const marvelService = new MarvelService();

marvelService.getAllCharacters().then((resolve) => {
  console.log(resolve.data.results.forEach((hero) => console.log(hero.name)));
});

marvelService.getCharacter(1011052).then((resolve) => {
  console.log(resolve.data.results.forEach((hero) => console.log(hero.name)));
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
