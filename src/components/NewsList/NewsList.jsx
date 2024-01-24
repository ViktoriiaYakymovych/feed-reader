import React from "react";
import { NavLink, useParams } from "react-router-dom";

const FeedsList = ({ feeds }) => {
  const { news } = useParams();
  return (
    <ul>
      {feeds.map((feed) => (
        <li key={feed.title}>
          <p>{feed.title}:</p>

          <NavLink to={`/${news}/${feed.title}`}>
            <img
              src={feed.urlToImage}
              alt={feed.title}
              width="360"
              height="360"
            />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default FeedsList;
