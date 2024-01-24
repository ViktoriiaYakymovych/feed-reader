import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import Loader from "../../components/Loader/Loader";
import NewCard from "../../components/NewCard/NewCard";

const FeedsNew = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [newDetails, setNewDetails] = useState(null);

  const { newsId } = useParams();

  useEffect(() => {
    if (!newsId) {
      return;
    }
    async function fetchNewDetails() {
      try {
        setLoading(true);
        const {articles} = await api.fetchOneNew(newsId);
        console.log(articles);
        if (articles.length > 0){
          setNewDetails(articles[0]);
        }
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(true);
          console.log(error.message);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchNewDetails();
  }, [newsId]);
  return (
    <section>
      {newDetails && <NewCard newDetails={newDetails} />}
      {loading && <Loader loading={loading} />}
      {error && <p>Sorry, something went wrong. Please, try to update page.</p>}
    </section>
  );
};

export default FeedsNew;
