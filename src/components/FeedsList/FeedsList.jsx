import React from "react";
import { NavLink } from "react-router-dom";

const FeedsList = ({ feeds }) => {
  return (
    <ul>
      {feeds.map((feed) => (
        <li key={feed.id}>
          <p>{feed.name}:</p>
          <NavLink to={`/${feed.id}`}>{feed.url}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default FeedsList;
