import { useState } from "react";
import StageModel from "../components/StageModel/StageModel";

const WALL_MESHES = [
  {
    mesh: 1,
    name: "LoftedBarn_6Wall_10x12_None_Wall1",
  },
  {
    mesh: 2,
    name: "LoftedBarn_6Wall_10x12_None_Wall2",
  },
  {
    mesh: 3,
    name: "LoftedBarn_6Wall_10x12_None_Wall3",
  },
  {
    mesh: 4,
    name: "LoftedBarn_6Wall_10x12_None_Wall4",
  },
];

function ModelView() {
  const [selectedMesh, setSelectedMesh] = useState(WALL_MESHES[0]);
  return (
    <div className="w-full h-full">
      <StageModel selectedMesh={selectedMesh} />
    </div>
  );
}

export default ModelView;
