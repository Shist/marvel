import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
  const { loading, request, error, clearError } = useHttp();

  const _apiBase = "https://gateway.marvel.com:443/v1/public/";
  const _apiKey = "apikey=b590e2183035d8a341bf24ada146846a";
  const _baseCharactersOffset = 210;
  const _baseComicsOffset = 0;

  const getAllCharacters = async (offset = _baseCharactersOffset) => {
    const result = await request(
      `${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`
    );
    return result.data.results.map(_transformCharacter);
  };

  const getCharacter = async (id) => {
    const result = await request(`${_apiBase}characters/${id}?${_apiKey}`);
    return _transformCharacter(result.data.results[0]);
  };

  const getAllComics = async (offset = _baseComicsOffset) => {
    const result = await request(
      `${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`
    );
    return result.data.results.map(_transformComic);
  };

  const getComic = async (id) => {
    const result = await request(`${_apiBase}comics/${id}?${_apiKey}`);
    return _transformComic(result.data.results[0]);
  };

  const _transformCharacter = (char) => {
    return {
      id: char.id,
      name: char.name,
      description: char.description,
      thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
      homepage: char.urls[0].url,
      wiki: char.urls[1].wiki,
      comics: char.comics.items,
    };
  };

  const _transformComic = (comic) => {
    return {
      id: comic.id,
      title: comic.title,
      description:
        comic.description || "There is no description about this comics yet",
      pageCount: comic.pageCount
        ? `${comic.pageCount} pages`
        : `There is no info about number of pages of that comics`,
      thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
      language: comic.textObjects[0]?.language || "en-us",
      price: comic.prices[0].price
        ? `${comic.prices[0].price}$`
        : "Not available",
    };
  };

  return {
    loading,
    error,
    clearError,
    getAllCharacters,
    getCharacter,
    getComic,
    getAllComics,
  };
};

export default useMarvelService;
