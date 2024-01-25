import Spinner from "../components/spinner/Spinner";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import Skeleton from "../components/skeleton/Skeleton";

import { ICharInfo, IComic } from "../services/MarvelService";

const setContent = <T extends ICharInfo | IComic>(
  process: string,
  Component: React.FC<{ data: T }>,
  data: T
) => {
  switch (process) {
    case "waiting":
      return <Skeleton />;
    case "loading":
      return <Spinner />;
    case "confirmed":
      return <Component data={data} />;
    case "error":
      return <ErrorMessage />;
    default:
      throw new Error("Unexpected process state");
  }
};

export default setContent;
