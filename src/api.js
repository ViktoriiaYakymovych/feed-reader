import axios from "axios";

axios.defaults.baseURL = "https://newsapi.org";
const API_KEY = "9c11c08b4a80484d82811a93c70ea7cf";

const fetchFeedsList = async () => {
  try {
    const { data } = await axios.get(
      `/v2/top-headlines/sources?apiKey=${API_KEY}`
    );
    return data;
  } catch (error) {
    if (error.code !== "ERR_CANCELED") {
      console.log(error.message);
    }
  }
};

const fetchFeedsNews = async (news) => {
  try {
    const { data } = await axios.get(
      `/v2/top-headlines?sources=${news}&apiKey=${API_KEY}`
    );
    return data;
  } catch (error) {
    if (error.code !== "ERR_CANCELED") {
      console.log(error.message);
    }
  }
};

// https://newsapi.org/v2/everything?q=bitcoin&apiKey=9c11c08b4a80484d82811a93c70ea7cf

const fetchOneNew = async (newsId) => {
  try {
    const { data } = await axios.get(
      `/v2/everything?q="${newsId}"&apiKey=${API_KEY}`
    );
    return data;
  } catch (error) {
    if (error.code !== "ERR_CANCELED") {
      console.log(error.message);
    }
  }
};

const api = { fetchFeedsList, fetchFeedsNews, fetchOneNew };

export default api;
