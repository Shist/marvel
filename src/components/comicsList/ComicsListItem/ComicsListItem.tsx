import { Link } from "react-router-dom";

import "./comicsListItem.scss";

const ComicsListItem = ({ comics }) => {
  return (
    <li className="comics-list-item">
      <Link to={`/comics/${comics.id}`}>
        <img
          src={comics.thumbnail}
          alt={comics.title}
          className="comics-list-item__img"
        />
        <div className="comics-list-item__name">{comics.title}</div>
        <div className="comics-list-item__price">{comics.price}</div>
      </Link>
    </li>
  );
};

export default ComicsListItem;
