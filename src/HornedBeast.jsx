export default function ({ title, imageUrl, decription }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} title={title} />
      <p>{decription}</p>
    </div>
  );
}
