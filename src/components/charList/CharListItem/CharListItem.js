import { Component } from "react";
import "./charListItem.scss";

class CharListItem extends Component {
  render() {
    const { name, thumbnail } = this.props.char;
    return (
      <li className="char-list-item" onClick={this.props.onCharSelected}>
        <img
          src={thumbnail}
          alt={`character ${name}`}
          style={
            thumbnail.endsWith("image_not_available.jpg")
              ? { objectFit: "contain" }
              : null
          }
        />
        <div className="char-list-item__name">{name}</div>
      </li>
    );
  }
}

export default CharListItem;
