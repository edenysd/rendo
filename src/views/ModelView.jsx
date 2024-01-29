import { useCallback, useState } from "react";
import StageModel from "../components/StageModel/StageModel";
import WallPicker from "../components/WallPicker/WallPicker";

const WALL_MESHES = [
  {
    label: "Front Wall",
    name: "LoftedBarn_6Wall_10x12_None_Wall1",
  },
  {
    label: "Left Wall",
    name: "LoftedBarn_6Wall_10x12_None_Wall2",
  },
  {
    label: "Back Wall",
    name: "LoftedBarn_6Wall_10x12_None_Wall3",
  },
  {
    label: "Right Wall",
    name: "LoftedBarn_6Wall_10x12_None_Wall4",
  },
];

function ModelView() {
  const [selectedWall, setSelectedWall] = useState(null);

  const handleChangeSelectedWall = useCallback((newSelectedWall) => {
    setSelectedWall(WALL_MESHES.find((iWall) => iWall.name == newSelectedWall));
  }, []);

  return (
    <div className="h-full w-full">
      <WallPicker
        className={
          "absolute bottom-0 left-0 z-10 flex w-full flex-col justify-center sm:left-24 sm:top-12 sm:w-auto sm:flex-row"
        }
        handleChangeSelectedWall={handleChangeSelectedWall}
        selectedWall={selectedWall}
        wallsList={WALL_MESHES}
      />
      <StageModel selectedWall={selectedWall} />
    </div>
  );
}

export default ModelView;
