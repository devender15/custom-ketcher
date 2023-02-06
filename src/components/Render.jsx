import React, { useState } from "react";
// import { SketcherCanvas } from "react-chemdoodle-web";
import ChemDoodle from "react-chemdoodle-web";

const Render = ({ structures }) => {
  const [selectedStructure, setSelectedStructure] = useState(null);

  const handleClick = (structure) => {
    setSelectedStructure(structure);
  };

  return (
    <div>
      <div>
        {structures.map((structure) => (
          <button key={structure.id} onClick={() => handleClick(structure)}>
            {structure.name}
          </button>
        ))}
      </div>
      <div>
        {/* {selectedStructure && (
          <SketcherCanvas
            width={500}
            height={500}
            molecule={selectedStructure.molecule}
          />
        )} */}
        <ChemDoodle
          width={600}
          height={400}
          molecule={selectedStructure ? selectedStructure.molecule : null}
        />
      </div>
    </div>
  );
};

export default Render;
