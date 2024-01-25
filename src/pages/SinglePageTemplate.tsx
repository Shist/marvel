import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import useMarvelService from "../services/MarvelService";
import AppBanner from "../components/appBanner/AppBanner";
import setContent from "../utils/setContent";

import { ICharInfo, IComic, isIComic } from "../services/MarvelService";

interface ISinglePageTemplateProps {
  Component: React.FC<{ data: ICharInfo }> | React.FC<{ data: IComic }>;
  dataType: "character" | "comic";
}

function isComicComponent(
  component: React.FC<{ data: ICharInfo }> | React.FC<{ data: IComic }>
): component is React.FC<{ data: IComic }> {
  return (component as React.FC<{ data: IComic }>).displayName !== undefined;
}

const SinglePageTemplate = ({
  Component,
  dataType,
}: ISinglePageTemplateProps) => {
  const { id } = useParams();
  const [data, setData] = useState<ICharInfo | IComic | null>(null);
  const { clearError, getComic, getCharacter, process, setProcess } =
    useMarvelService();

  useEffect(() => {
    updateData();
  }, [id]);

  const updateData = () => {
    clearError();

    if (id) {
      switch (dataType) {
        case "comic":
          getComic(id)
            .then(onDataLoaded)
            .then(() => setProcess("confirmed"));
          break;
        case "character":
          getCharacter(id)
            .then(onDataLoaded)
            .then(() => setProcess("confirmed"));
          break;
        default:
          console.error(`Unexpected dataType inside switch!`);
      }
    } else {
      console.error(`Warning: id of the data (either char or comic) was empty`);
    }
  };

  const onDataLoaded = (data: ICharInfo | IComic) => {
    setData(data);
  };

  return (
    <>
      <AppBanner />
      {data
        ? isIComic(data)
          ? isComicComponent(Component)
            ? setContent<IComic>(process, Component, data)
            : null
          : isComicComponent(Component)
          ? null
          : setContent<ICharInfo>(process, Component, data)
        : null}
    </>
  );
};

export default SinglePageTemplate;
