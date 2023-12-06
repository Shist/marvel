import { Link } from "react-router-dom";

import { IComic } from "../../../services/MarvelService";

import "./comicsListItem.scss";

interface IComicListItemProps {
  comic: IComic;
}

const ComicsListItem = ({ comic }: IComicListItemProps) => {
  return (
    <li className="comics-list-item">
      <Link to={`/comics/${comic.id}`}>
        <img
          src={comic.thumbnail}
          alt={comic.title}
          className="comics-list-item__img"
        />
        <div className="comics-list-item__name">{comic.title}</div>
        <div className="comics-list-item__price">{comic.price}</div>
      </Link>
    </li>
  );
};

export default ComicsListItem;
