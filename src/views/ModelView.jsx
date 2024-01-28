import { useCallback, useState } from "react";
import StageModel from "../components/StageModel/StageModel";
import WallPicker from "../components/WallPicker/WallPicker";

const WALL_MESHES = [
  {
    mesh: "Front Wall",
    name: "LoftedBarn_6Wall_10x12_None_Wall1",
  },
  {
    mesh: "Left Wall",
    name: "LoftedBarn_6Wall_10x12_None_Wall2",
  },
  {
    mesh: "Back Wall",
    name: "LoftedBarn_6Wall_10x12_None_Wall3",
  },
  {
    mesh: "Right Wall",
    name: "LoftedBarn_6Wall_10x12_None_Wall4",
  },
];

function ModelView() {
  const [selectedWall, setSelectedWall] = useState(null);

  const handleChangeSelectedWall = useCallback((newSelectedWall) => {
    setSelectedWall(WALL_MESHES.find((iWall) => iWall.name == newSelectedWall));
  }, []);

  return (
    <div className="w-full h-full">
      <WallPicker
        className={"absolute left-24 top-12 z-10"}
        handleChangeSelectedWall={handleChangeSelectedWall}
        selectedWall={selectedWall}
        wallsList={WALL_MESHES}
      />
      <StageModel selectedWall={selectedWall} />
    </div>
  );
}

export default ModelView;
