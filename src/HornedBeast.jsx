import { useState } from "react";

export default function HornedBeast({ title, imageUrl, desc, onClick }) {
  const [likes, setLikes] = useState(0);

  function handleLikes() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <h2>{title}</h2>
      <img src={imageUrl} onClick={onClick} alt={title} />
      <p>{desc}</p>
      <span onClick={handleLikes}>❤️ {likes}</span>
    </div>
  );
}
