import { useHttp } from "../hooks/http.hook";

interface ICharComicDetails {
  resourceURI: string;
  name: string;
}

interface IResponseCharInfo {
  id: number;
  name: string;
  description: string;
  thumbnail: { path: string; extension: string };
  urls: { url: string }[];
  comics: { items: ICharComicDetails[] };
}

interface IResponseComic {
  id: number;
  title: string;
  description: string;
  pageCount: number;
  thumbnail: { path: string; extension: string };
  textObjects: { language: string }[];
  prices: { price: number }[];
}

interface IResponseCharsBody {
  data: { results: IResponseCharInfo[] };
}

interface IResponseComicsBody {
  data: { results: IResponseComic[] };
}

export interface ICharInfo {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  homepage: string;
  wiki: string;
  comics: ICharComicDetails[];
}

export interface IComic {
  id: number;
  title: string;
  description: string;
  pageCount: string;
  thumbnail: string;
  language: string;
  price: string;
}

export function isIComic(object: unknown): object is IComic {
  return (
    typeof object === "object" &&
    object !== null &&
    "id" in object &&
    typeof object.id === "number" &&
    "title" in object &&
    typeof object.title === "string" &&
    "description" in object &&
    typeof object.description === "string" &&
    "pageCount" in object &&
    typeof object.pageCount === "string" &&
    "thumbnail" in object &&
    typeof object.thumbnail === "string" &&
    "language" in object &&
    typeof object.language === "string" &&
    "price" in object &&
    typeof object.price === "string"
  );
}

const useMarvelService = () => {
  const { request, clearError, process, setProcess } = useHttp();

  const _apiBase = "https://gateway.marvel.com:443/v1/public/";
  const _apiKey = "apikey=b590e2183035d8a341bf24ada146846a";
  const _baseCharactersOffset = 210;
  const _baseComicsOffset = 0;

  const getAllCharacters = async (
    offset: number = _baseCharactersOffset
  ): Promise<ICharInfo[]> => {
    const result: IResponseCharsBody = await request(
      `${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`
    );
    return result.data.results.map(_transformCharacter);
  };

  const getCharacter = async (id: string): Promise<ICharInfo> => {
    const result: IResponseCharsBody = await request(
      `${_apiBase}characters/${id}?${_apiKey}`
    );
    return _transformCharacter(result.data.results[0]);
  };

  const getCharactersByName = async (name: string): Promise<ICharInfo[]> => {
    const result: IResponseCharsBody = await request(
      `${_apiBase}characters?name=${name}&${_apiKey}`
    );
    return result.data.results.map(_transformCharacter);
  };

  const getAllComics = async (
    offset: number = _baseComicsOffset
  ): Promise<IComic[]> => {
    const result: IResponseComicsBody = await request(
      `${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`
    );
    return result.data.results.map(_transformComic);
  };

  const getComic = async (id: string): Promise<IComic> => {
    const result: IResponseComicsBody = await request(
      `${_apiBase}comics/${id}?${_apiKey}`
    );
    return _transformComic(result.data.results[0]);
  };

  const _transformCharacter = (char: IResponseCharInfo): ICharInfo => {
    return {
      id: char.id,
      name: char.name,
      description: char.description,
      thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items,
    };
  };

  const _transformComic = (comic: IResponseComic): IComic => {
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
    clearError,
    process,
    setProcess,
    getAllCharacters,
    getCharacter,
    getCharactersByName,
    getComic,
    getAllComics,
  };
};

export default useMarvelService;
