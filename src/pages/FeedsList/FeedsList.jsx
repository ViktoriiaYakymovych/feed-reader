import { useEffect, useState } from "react";
import api from "../../api";
import FeedsList from "../../components/FeedsList/FeedsList";
import Loader from "../../components/Loader/Loader";

const FeedsListPage = () => {
  const [feedsList, setFeedsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedsList = async () => {
      try {
        setLoading(true);
        const { sources } = await api.fetchFeedsList();
        setFeedsList([...sources]);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(error.message);
        }
        setError(null);
      } finally {
        setLoading(false);
      }
    };
    fetchFeedsList();
  }, []);

  return (
    <section>
      <h2>Feed's List</h2>
      {feedsList.length > 0 && <FeedsList feeds={feedsList} />}
      {loading && <Loader loading={loading} />}
      {error && <p>Sorry, something went wrong. Please, try to update page.</p>}
    </section>
  );
};

export default FeedsListPage;
