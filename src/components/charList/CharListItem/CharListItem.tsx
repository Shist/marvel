import "./charListItem.scss";

import { ICharInfo } from "../../../services/MarvelService";

interface ICharListItemProps {
  char: ICharInfo;
  itemsRefs: React.MutableRefObject<HTMLElement[] | null[]>;
  onItemClicked: () => void;
}

const CharListItem = ({
  char,
  itemsRefs,
  onItemClicked,
}: ICharListItemProps) => {
  return (
    <li
      className="char-list-item"
      ref={(element) => (itemsRefs.current[char.id] = element)}
      tabIndex={0}
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
            : undefined
        }
      />
      <div className="char-list-item__name">{char.name}</div>
    </li>
  );
};

export default CharListItem;
