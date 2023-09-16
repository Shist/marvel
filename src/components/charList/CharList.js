import { useState, useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";

import useMarvelService from "../../services/MarvelService";
import CharListItem from "./CharListItem/CharListItem";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./charList.scss";
import "./CharListItem/charListItem.scss";

const setContent = (process, Component, newItemsLoading) => {
  switch (process) {
    case "waiting":
      return <Spinner />;
    case "loading":
      return newItemsLoading ? <Component /> : <Spinner />;
    case "confirmed":
      return <Component />;
    case "error":
      return <ErrorMessage />;
    default:
      throw new Error("Unexpected process state");
  }
};

const CharList = ({ onCharSelected }) => {
  const [charsList, setCharsList] = useState([]);
  const [newItemsLoading, setNewItemsLoading] = useState(false);
  const [offset, setOffset] = useState(210);
  const [charsEnded, setCharsEnded] = useState(false);

  const { getAllCharacters, process, setProcess } = useMarvelService();

  useEffect(() => {
    onRequest(offset, true);
  }, []);

  const onRequest = (offset, initial) => {
    initial ? setNewItemsLoading(false) : setNewItemsLoading(true);
    getAllCharacters(offset)
      .then(onCharsListLoaded)
      .then(() => setProcess("confirmed"));
  };

  const onCharsListLoaded = (newCharsList) => {
    let ended = false;
    if (newCharsList.length < 9) {
      ended = true;
    }

    setCharsList((charsList) => [...charsList, ...newCharsList]);
    setNewItemsLoading(false);
    setOffset((offset) => offset + 9);
    setCharsEnded(ended);
  };

  const itemsRefs = useRef([]);

  const focusOnItem = (id) => {
    itemsRefs.current.forEach((item) =>
      item.classList.remove("char__item-selected")
    );
    itemsRefs.current[id].classList.add("char__item-selected");
    itemsRefs.current[id].focus();
  };

  const content = (
    <ul className="char__grid">
      <TransitionGroup component={null}>
        {charsList.map((char) =>
          char ? (
            <CSSTransition
              key={char?.id}
              timeout={500}
              classNames="char-list-item"
            >
              <CharListItem
                key={char?.id}
                char={char}
                itemsRefs={itemsRefs}
                onItemClicked={() => {
                  onCharSelected(char?.id);
                  focusOnItem(char?.id);
                }}
              />
            </CSSTransition>
          ) : null
        )}
      </TransitionGroup>
    </ul>
  );

  return (
    <div className="char__list">
      {setContent(process, () => content, newItemsLoading)}
      <button
        className="button button__main button__long"
        disabled={newItemsLoading}
        style={{ display: charsEnded ? "none" : "block" }}
        onClick={() => onRequest(offset, false)}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

CharList.propTypes = {
  onCharSelected: PropTypes.func.isRequired,
};

export default CharList;
