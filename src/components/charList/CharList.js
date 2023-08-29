import { Component } from "react";
import PropTypes from "prop-types";

import Spinner from "../../components/spinner/Spinner";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import MarvelService from "../../services/MarvelService";
import CharListItem from "./CharListItem/CharListItem";

import "./charList.scss";

class CharList extends Component {
  state = {
    charsList: [],
    loading: true,
    error: false,
    newItemsLoading: false,
    offset: 210,
    charsEnded: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.onRequest();
  }

  onRequest = (offset) => {
    this.onCharsListLoading();
    this.marvelService
      .getAllCharacters(offset)
      .then(this.onCharsListLoaded)
      .catch(this.onError);
  };

  onCharsListLoading = () => {
    this.setState({
      newItemsLoading: true,
    });
  };

  onCharsListLoaded = (newCharsList) => {
    let ended = false;
    if (newCharsList.length < 9) {
      ended = true;
    }

    this.setState(({ charsList, offset }) => ({
      charsList: [...charsList, ...newCharsList],
      loading: false,
      newItemsLoading: false,
      offset: offset + 9,
      charsEnded: ended,
    }));
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  render() {
    const { charsList, loading, error, newItemsLoading, offset, charsEnded } =
      this.state;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error)
      ? charsList.map((char) => (
          <CharListItem
            key={char.id}
            char={char}
            onCharSelected={() => this.props.onCharSelected(char.id)}
          />
        ))
      : null;

    return (
      <div className="char__list">
        {errorMessage}
        {spinner}
        <ul className="char__grid">{content}</ul>
        <button
          className="button button__main button__long"
          disabled={newItemsLoading}
          style={{ display: charsEnded ? "none" : "block" }}
          onClick={() => this.onRequest(offset)}
        >
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

CharList.propTypes = {
  onCharSelected: PropTypes.func.isRequired,
};

export default CharList;
