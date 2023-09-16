import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Spinner from "../../components/spinner/Spinner";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import useMarvelService from "../../services/MarvelService";
import ComicsListItem from "./ComicsListItem/ComicsListItem";

import "./comicsList.scss";
import "./ComicsListItem/comicsListItem.scss";

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

const ComicsList = () => {
  const [comicsList, setComicsList] = useState([]);
  const [newItemsLoading, setNewItemsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [comicsEnded, setComicsEnded] = useState(false);

  const { getAllComics, process, setProcess } = useMarvelService();

  useEffect(() => {
    onRequest(offset, true);
  }, []);

  const onRequest = (offset, initial) => {
    initial ? setNewItemsLoading(false) : setNewItemsLoading(true);
    getAllComics(offset)
      .then(onComicsListLoaded)
      .then(() => setProcess("confirmed"));
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

  const content = (
    <ul className="comics__grid">
      <TransitionGroup component={null} appear={!newItemsLoading}>
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
    </ul>
  );

  return (
    <div className="comics__list">
      {setContent(process, () => content, newItemsLoading)}
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
