import { Toaster } from "react-hot-toast";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery";
import { fetchArticles } from "../api";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchArticles = async (newQuery) => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setArticles([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = await fetchArticles(query.split("/")[1], page);
        console.log(fetchedData);
        setArticles((prevArticles) => [
          ...prevArticles,
          ...fetchedData.results,
        ]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  return (
    <div>
      <SearchBar onSearch={searchArticles} />
      {error && <b>Oops, there was an error, please try reloading 😭</b>}
      {articles.length > 0 && <ImageGallery items={articles} />}
      {loading && <b>Loading articles, please wait...</b>}
      {articles.length > 0 && !loading && (
        <button onClick={handleLoadMore}>Load more</button>
      )}
      <Toaster position="right-center" />
    </div>
  );
};
export default App;
