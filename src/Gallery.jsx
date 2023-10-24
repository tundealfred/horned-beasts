import HornedBeast from "./HornedBeast";

export default function () {
  return (
    <div id="hornedSection">
      <HornedBeast
        title="Lionel Messi"
        imageUrl="src/assets/animal1.jpg"
        desc="Argentina Legend"
      />
      <HornedBeast
        title="Cristino Ronaldo"
        imageUrl="src/assets/animal2.jpg"
        desc="Portugal Legend"
      />
      <HornedBeast
        title="Babatunde Alfred"
        imageUrl="src/assets/animal3.jpg"
        desc="Football Manager Legend"
      />
    </div>
  );
}
