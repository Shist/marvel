import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
  const { loading, request, error, clearError } = useHttp();

  const _apiBase = "https://gateway.marvel.com:443/v1/public/";
  const _apiKey = "apikey=b590e2183035d8a341bf24ada146846a";
  const _baseCharactersOffset = 210;
  const _baseComicsOffset = 8;

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
      `${{
        _apiBase,
      }}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`
    );
    return result.data.results.map(_transformComics);
  };

  const getComics = async (id) => {
    const result = await request(`${{ _apiBase }}comics/${id}?${_apiKey}`);
    return _transformComics(result.data.results[0]);
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

  const _transformComics = (comics) => {
    return {
      id: comics.id,
      title: comics.title,
      description:
        comics.description || "There is no description about this comics yet",
      pageCount: comics.pageCount
        ? `${comics.pageCount} p.`
        : `There is no info about number of pages of that comics`,
      thumbnail: `${comics.thumbnail.path}.${comics.thumbnail.extension}`,
      language: comics.textObjects[0]?.language || "en-us",
      price: comics.prices[0].price
        ? `${comics.prices[0].price}$`
        : "Not available",
    };
  };

  return {
    loading,
    error,
    clearError,
    getAllCharacters,
    getCharacter,
    getComics,
    getAllComics,
  };
};

export default useMarvelService;
