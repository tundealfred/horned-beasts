import { useState } from "react";

export default function HornedBeast({ title, imageUrl, desc }) {
  const [likes, setLikes] = useState(0);

  function handleLikes() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <h2>{title}</h2>
      <img src={imageUrl} onClick={handleLikes} />
      <p>{desc}</p>
      <span>❤️ {likes}</span>
    </div>
  );
}
