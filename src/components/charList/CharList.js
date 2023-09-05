import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import Spinner from "../../components/spinner/Spinner";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import MarvelService from "../../services/MarvelService";
import CharListItem from "./CharListItem/CharListItem";

import "./charList.scss";

const CharList = ({ onCharSelected }) => {
  const [charsList, setCharsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [newItemsLoading, setNewItemsLoading] = useState(false);
  const [offset, setOffset] = useState(210);
  const [charsEnded, setCharsEnded] = useState(false);

  const marvelService = new MarvelService();

  const onRequest = (offset) => {
    onCharsListLoading();
    marvelService
      .getAllCharacters(offset)
      .then(onCharsListLoaded)
      .catch(onError);
  };

  useEffect(() => {
    onRequest();
  }, []);

  const onCharsListLoading = () => {
    setNewItemsLoading(true);
  };

  const onCharsListLoaded = (newCharsList) => {
    let ended = false;
    if (newCharsList.length < 9) {
      ended = true;
    }

    setCharsList((charsList) => [...charsList, ...newCharsList]);
    setLoading(false);
    setNewItemsLoading(false);
    setOffset((offset) => offset + 9);
    setCharsEnded(ended);
  };

  const onError = () => {
    this.setState({ loading: false, error: true });
    setLoading(false);
    setError(true);
  };

  const itemsRefs = useRef([]);

  const focusOnItem = (id) => {
    itemsRefs.current.forEach((item) =>
      item.classList.remove("char__item-selected")
    );
    itemsRefs.current[id].classList.add("char__item-selected");
    itemsRefs.current[id].focus();
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error)
    ? charsList.map((char) => (
        <CharListItem
          key={char.id}
          char={char}
          itemsRefs={itemsRefs}
          onItemClicked={() => {
            onCharSelected(char.id);
            focusOnItem(char.id);
          }}
        />
      ))
    : null;

  return (
    <div className="char__list">
      {errorMessage}
      {spinner}
      <ul className="char__grid">{content}</ul>
      <button
        className="button button__main button__long"
        disabled={newItemsLoading}
        style={{ display: charsEnded ? "none" : "block" }}
        onClick={() => onRequest(offset)}
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
