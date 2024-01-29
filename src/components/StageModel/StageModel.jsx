import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";

function StageModel({ selectedWall }) {
  return (
    <div className="relative h-full w-full" id="canvas-container">
      <Canvas camera={{ position: [5, 5, -5] }}>
        <Scene selectedWall={selectedWall} />

        <ambientLight intensity={6} />
        <directionalLight
          color="white"
          position={[-5, 5, -5]}
          distance={20}
          intensity={2}
        />

        <OrbitControls target={[0, 0, 2]} />
      </Canvas>
    </div>
  );
}

export default StageModel;
