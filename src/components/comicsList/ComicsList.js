import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Spinner from "../../components/spinner/Spinner";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import useMarvelService from "../../services/MarvelService";
import ComicsListItem from "./ComicsListItem/ComicsListItem";

import "./comicsList.scss";
import "./ComicsListItem/comicsListItem.scss";

const ComicsList = () => {
  const [comicsList, setComicsList] = useState([]);
  const [newItemsLoading, setNewItemsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [comicsEnded, setComicsEnded] = useState(false);

  const { loading, error, getAllComics } = useMarvelService();

  useEffect(() => {
    onRequest(offset, true);
  }, []);

  const onRequest = (offset, initial) => {
    initial ? setNewItemsLoading(false) : setNewItemsLoading(true);
    getAllComics(offset).then(onComicsListLoaded);
  };

  const onComicsListLoaded = (newComicsList) => {
    let ended = false;
    if (newComicsList.length < 8) {
      ended = true;
    }

    setComicsList((comicsList) => [...comicsList, ...newComicsList]);
    setNewItemsLoading(false);
    setOffset((offset) => offset + 8);
    setComicsEnded(ended);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading && !newItemsLoading ? <Spinner /> : null;
  const content = (
    <TransitionGroup component={null}>
      {comicsList.map((comicsItem, index) => {
        return comicsItem ? (
          <CSSTransition
            key={index}
            timeout={500}
            classNames="comics-list-item"
          >
            <ComicsListItem comics={comicsItem} key={index} />
          </CSSTransition>
        ) : null;
      })}
    </TransitionGroup>
  );

  return (
    <div className="comics__list">
      {errorMessage}
      {spinner}
      <ul className="comics__grid">{content}</ul>
      <button
        className="button button__main button__long"
        disabled={newItemsLoading}
        style={{ display: comicsEnded ? "none" : "block" }}
        onClick={() => onRequest(offset, false)}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default ComicsList;
