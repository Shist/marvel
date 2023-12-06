import { useState, useEffect, useRef, useMemo } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";

import useMarvelService from "../../services/MarvelService";
import CharListItem from "./CharListItem/CharListItem";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import { ICharInfo } from "../../services/MarvelService";

import "./charList.scss";
import "./CharListItem/charListItem.scss";

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

interface ICharList {
  onCharSelected: (id: number) => void;
}

const CharList = ({ onCharSelected }: ICharList) => {
  const [charsList, setCharsList] = useState<ICharInfo[]>([]);
  const [newItemsLoading, setNewItemsLoading] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(210);
  const [charsEnded, setCharsEnded] = useState<boolean>(false);

  const { getAllCharacters, process, setProcess } = useMarvelService();

  useEffect(() => {
    onRequest(offset, true);
  }, []);

  const onRequest = (offset: number, initial: boolean) => {
    initial ? setNewItemsLoading(false) : setNewItemsLoading(true);
    getAllCharacters(offset)
      .then(onCharsListLoaded)
      .then(() => setProcess("confirmed"));
  };

  const onCharsListLoaded = (newCharsList: ICharInfo[]) => {
    let ended = false;
    if (newCharsList.length < 9) {
      ended = true;
    }

    setCharsList((charsList) => [...charsList, ...newCharsList]);
    setNewItemsLoading(false);
    setOffset((offset) => offset + 9);
    setCharsEnded(ended);
  };

  const itemsRefs = useRef<HTMLElement[] | null[]>([]);

  const focusOnItem = (id: number) => {
    itemsRefs.current.forEach((item) =>
      item?.classList.remove("char__item-selected")
    );
    itemsRefs.current[id]?.classList.add("char__item-selected");
    itemsRefs.current[id]?.focus();
  };

  const content = (
    <ul className="char__grid">
      <TransitionGroup component={null} appear={!newItemsLoading}>
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

  const elements = useMemo(() => {
    return setContent(process, () => content, newItemsLoading);
  }, [process]);

  return (
    <div className="char__list">
      {elements}
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
