import HornedBeast from "./HornedBeast";
import { Form } from "react-bootstrap";

export default function Gallery({ data, onBeastSelect, onFilterBeast }) {
  return (
    <div id="hornedSection">
      <Form>
        <Form.Group controlId="filterByHorns">
          <Form.Label>Filter by Horns(Balon d'Or):</Form.Label>
          <br></br>
          <Form.Control
            as="select"
            onChange={(e) => onFilterBeast(e.target.value)}
          >
            <option value="">All</option>
            <option value="8">8 Horns</option>
            <option value="6">6 Horns</option>
            <option value="10">10 Horns</option>
          </Form.Control>
        </Form.Group>
      </Form>
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
