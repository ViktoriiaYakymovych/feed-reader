import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import Loader from "../../components/Loader//Loader";
import NewsList from "../../components/NewsList/NewsList";

const FeedsNews = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newsList, setNewsList] = useState([]);

  const { news } = useParams();

  useEffect(() => {
    if (!news) {
      return;
    }

    async function fetchNewsList() {
      try {
        setLoading(true);
        const { articles } = await api.fetchFeedsNews(news);
        setNewsList(articles);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(true);
          console.log(error.message);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchNewsList();
  }, [news]);
  return (
    <section>
      <h2>{news} news list</h2>
      {newsList.length > 0 && <NewsList feeds={newsList} />}
      {loading && <Loader loading={loading} />}
      {error && <p>Sorry, something went wrong. Please, try to update page.</p>}
    </section>
  );
};

export default FeedsNews;
