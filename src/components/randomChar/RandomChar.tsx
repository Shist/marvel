import { useState, useEffect } from "react";
import useMarvelService from "../../services/MarvelService";
import setContent from "../../utils/setContent";

import { ICharInfo } from "../../services/MarvelService";

import "./randomChar.scss";
// @ts-ignore
import mjolnir from "../../resources/img/mjolnir.png";

const RandomChar = () => {
  const [char, setChar] = useState<ICharInfo | null>(null);

  const { clearError, getCharacter, process, setProcess } = useMarvelService();

  useEffect(() => {
    updateChar();
    const timerId = setInterval(updateChar, 60000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const onCharLoaded = (char: ICharInfo) => {
    setChar(char);
  };

  const updateChar = () => {
    clearError();
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    getCharacter(id.toString())
      .then(onCharLoaded)
      .then(() => setProcess("confirmed"));
  };

  return (
    <div className="randomchar">
      {char ? setContent(process, View, char) : null}
      <div className="randomchar__static">
        <p className="randomchar__title">
          Random character for today!
          <br />
          Do you want to get to know him better?
        </p>
        <p className="randomchar__title">Or choose another one</p>
        <button
          className="button button__main"
          onClick={() => {
            if (process !== "loading") {
              updateChar();
            }
          }}
        >
          <div className="inner">try it</div>
        </button>
        <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
      </div>
    </div>
  );
};

const View = ({ data }: { data: ICharInfo }) => {
  if (!data) return null;

  const { name, description, thumbnail, homepage, wiki } = data;

  return (
    <div className="randomchar__block">
      <img
        src={thumbnail}
        alt="Random character"
        className="randomchar__img"
        style={
          thumbnail?.endsWith("image_not_available.jpg")
            ? { objectFit: "contain" }
            : undefined
        }
      />
      <div className="randomchar__info">
        <p className="randomchar__name">{name}</p>
        <p className="randomchar__descr">
          {description
            ? description
            : "There is currently no additional information about this character."}
        </p>
        <div className="randomchar__btns">
          <a href={homepage} className="button button__main">
            <div className="inner">homepage</div>
          </a>
          <a href={wiki} className="button button__secondary">
            <div className="inner">Wiki</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RandomChar;
