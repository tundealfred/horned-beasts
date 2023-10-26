export default function SelectedBeast({ beast, onClose }) {
  // if (!beast) {
  //   return null;
  // }
  return (
    <div className="modal">
      {/* <button onClose={onClose}>Close</button> */}
      <h2>{beast.title}</h2>
      <img src={beast.imageUrl} alt={beast.title} />
      <p>{beast.desc}</p>
    </div>
  );
}
