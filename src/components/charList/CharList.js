import { Component } from "react";
import Spinner from "../../components/spinner/Spinner";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import MarvelService from "../../services/MarvelService";
import CharListItem from "./CharListItem/CharListItem";

import "./charList.scss";

class CharList extends Component {
  state = {
    chars: [],
    loading: true,
    error: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.updateChars();
  }

  onCharsLoaded = (chars) => {
    this.setState({ chars, loading: false });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  updateChars = () => {
    this.marvelService
      .getAllCharacters()
      .then(this.onCharsLoaded)
      .catch(this.onError);
  };

  render() {
    const { chars, loading, error } = this.state;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error)
      ? chars.map((char) => <CharListItem key={char.id} char={char} />)
      : null;

    return (
      <div className="char__list">
        {errorMessage}
        {spinner}
        <ul className="char__grid">{content}</ul>
        <button className="button button__main button__long">
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

export default CharList;
