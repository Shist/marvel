import "./comicsListItem.scss";

const ComicsListItem = ({ comics }) => {
  return (
    <li className="comics-list-item">
      <a href="#">
        <img
          src={comics.thumbnail}
          alt={comics.title}
          className="comics-list-item__img"
        />
        <div className="comics-list-item__name">{comics.title}</div>
        <div className="comics-list-item__price">{comics.price}</div>
      </a>
    </li>
  );
};

export default ComicsListItem;
