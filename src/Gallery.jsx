import HornedBeast from "./HornedBeast";
import data from "./assets/beast-data.json";

export default function Gallery({ onBeastSelect }) {
  return (
    <div id="hornedSection">
      {data.map((beast) => {
        return (
          <HornedBeast
            key={beast._id}
            title={beast.title}
            imageUrl={beast.imageUrl}
            desc={beast.desc}
            onClick={() => onBeastSelect(beast)}
          />
        );
      })}
    </div>
  );
}
