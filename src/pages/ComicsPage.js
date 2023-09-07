import ComicsList from "../components/comicsList/ComicsList";
import AppBanner from "../components/appBanner/AppBanner";
import ErrorBoundary from "../components/errorBoundary/ErrorBoundary";

const comicsPage = () => {
  return (
    <>
      <AppBanner />
      <ErrorBoundary>
        <ComicsList />
      </ErrorBoundary>
    </>
  );
};

export default comicsPage;
