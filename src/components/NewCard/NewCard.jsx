import React from "react";

const NewCard = ({
  newDetails: { title, author, content, urlToImage, url },
}) => {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <img src={urlToImage} alt={title} />
      </div>
      <p>Author: {author}</p>
      <p>{content}</p>
      <a href={url} target="blank">
        Reed all description
      </a>
    </div>
  );
};

export default NewCard;
