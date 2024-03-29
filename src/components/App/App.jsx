import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "../../AppLayout";
import FeedsListPage from "../../pages/FeedsList/FeedsList";
import FeedsNew from "../../pages/FeedsNew/FeedsNew";
import FeedsNews from "../../pages/FeedsNews/FeedsNews";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<FeedsListPage />} />
        <Route path="/:news" element={<FeedsNews />} />
        <Route path="/:news/:newsId" element={<FeedsNew />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
