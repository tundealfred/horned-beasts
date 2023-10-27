import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Gallery from "./Gallery";
import SelectedBeast from "./components/SelectedBeast";
import data from "./assets/beast-data.json";
import { useState } from "react";

function App() {
  const [selectedBeast, setSelectedBeast] = useState(null);
  const [filterByHorns, SetFilterByHorns] = useState(null);

  const handleBeastSelect = (beast) => {
    setSelectedBeast(beast);
  };

  const handleFilterBeast = (selectedHorns) => {
    SetFilterByHorns(selectedHorns);
  };

  const filteredBeast = filterByHorns
    ? data.filter((beast) => beast.horns === filterByHorns)
    : data;

  return (
    <div>
      <Header />
      <Gallery
        data={filteredBeast}
        onBeastSelect={handleBeastSelect}
        onFilterBeast={handleFilterBeast}
      />
      <Footer />
      {selectedBeast && (
        <SelectedBeast
          beast={selectedBeast}
          onClose={() => setSelectedBeast(null)}
        />
      )}
    </div>
  );
}

export default App;
