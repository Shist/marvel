import "./charListItem.scss";

const CharListItem = ({ char, itemsRefs, onItemClicked }) => {
  return (
    <li
      className="char-list-item"
      ref={(element) => (itemsRefs.current[char.id] = element)}
      tabIndex="0"
      role="button"
      onClick={onItemClicked}
      onKeyDown={(e) => {
        if (e.code === "Space" || e.code === "Enter") {
          e.preventDefault();
          onItemClicked();
        }
      }}
    >
      <img
        src={char.thumbnail}
        alt={`character ${char.name}`}
        style={
          char.thumbnail.endsWith("image_not_available.jpg")
            ? { objectFit: "contain" }
            : null
        }
      />
      <div className="char-list-item__name">{char.name}</div>
    </li>
  );
};

export default CharListItem;
