import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import useMarvelService, { ICharInfo } from "../../services/MarvelService";
import ComicsListItem from "./ComicsListItem/ComicsListItem";

import { IComic } from "../../services/MarvelService";

import "./comicsList.scss";
import "./ComicsListItem/comicsListItem.scss";

const setContent = (
  process: string,
  Component: React.FC,
  newItemsLoading: boolean
): JSX.Element => {
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
  const [comicsList, setComicsList] = useState<IComic[]>([]);
  const [newItemsLoading, setNewItemsLoading] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);
  const [comicsEnded, setComicsEnded] = useState<boolean>(false);

  const { getAllComics, process, setProcess } = useMarvelService();

  useEffect(() => {
    onRequest(offset, true);
  }, []);

  const onRequest = (offset: number, initial: boolean) => {
    initial ? setNewItemsLoading(false) : setNewItemsLoading(true);
    getAllComics(offset)
      .then(onComicsListLoaded)
      .then(() => setProcess("confirmed"));
  };

  const onComicsListLoaded = (newComicsList: IComic[]) => {
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
              <ComicsListItem comic={comicsItem} key={index} />
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
