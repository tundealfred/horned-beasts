import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Gallery from "./Gallery";
import SelectedBeast from "./components/SelectedBeast";
import data from "./assets/beast-data.json";
import { useState } from "react";

function App() {
  const [selectedBeast, setSelectedBeast] = useState(null);

  const handleBeastSelect = (beast) => {
    setSelectedBeast(beast);
  };

  return (
    <div>
      <Header />
      <Gallery data={data} onBeastSelect={handleBeastSelect} />
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
