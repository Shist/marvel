import Spinner from "../components/spinner/Spinner";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import Skeleton from "../components/skeleton/Skeleton";

import { ICharInfo } from "../services/MarvelService";

const setContent = (
  process: string,
  Component: React.FC<{ data: ICharInfo }>,
  data: ICharInfo
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
