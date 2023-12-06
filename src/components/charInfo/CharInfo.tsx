import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import useMarvelService from "../../services/MarvelService";
import setContent from "../../utils/setContent";

import { ICharInfo } from "../../services/MarvelService";

import "./charInfo.scss";

const CharInfo = ({ charId }: { charId: number }) => {
  const [char, setChar] = useState<ICharInfo>({
    id: 0,
    name: "",
    description: "",
    thumbnail: "",
    homepage: "",
    wiki: "",
    comics: [],
  });

  const { clearError, getCharacter, process, setProcess } = useMarvelService();

  useEffect(() => {
    updateChar();
  }, [charId]);

  const updateChar = () => {
    if (!charId) {
      return;
    }
    clearError();
    getCharacter(charId)
      .then(onCharLoaded)
      .then(() => setProcess("confirmed"));
  };

  const onCharLoaded = (char: ICharInfo) => {
    setChar(char);
  };

  return <div className="char__info">{setContent(process, View, char)}</div>;
};

const View = ({ data }: { data: ICharInfo }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = data;
  const comicsArr = comics.map((item, index) => {
    return index < 10 ? (
      <li className="char__comics-item" key={index}>
        {item.name}
      </li>
    ) : null;
  });
  return (
    <>
      <div className="char__basics">
        <img
          src={thumbnail}
          alt={name}
          style={
            thumbnail.endsWith("image_not_available.jpg")
              ? { objectFit: "contain" }
              : undefined
          }
        />
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">{description}</div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">
        {comicsArr.length
          ? comicsArr
          : "There are no any comics with this character"}
      </ul>
    </>
  );
};

// That part was in the project even before using TypeScript (working with PropTypes in react)
CharInfo.propTypes = {
  charId: PropTypes.number,
};

export default CharInfo;
