import { Helmet } from "react-helmet";

import ComicsList from "../components/comicsList/ComicsList";
import AppBanner from "../components/appBanner/AppBanner";
import ErrorBoundary from "../components/errorBoundary/ErrorBoundary";

const comicsPage = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Page with list of marvel comics" />
        <title>Comics page</title>
      </Helmet>
      <AppBanner />
      <ErrorBoundary>
        <ComicsList />
      </ErrorBoundary>
    </>
  );
};

export default comicsPage;
