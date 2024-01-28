import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls } from "@react-three/drei";
import Scene from "./Scene";

function StageModel({ selectedMesh }) {
  return (
    <div className="relative w-full h-full" id="canvas-container">
      <Canvas camera={{ position: [5, 5, -5] }}>
        <Scene selectedMesh={selectedMesh} />
        <ambientLight intensity={1} />
        <directionalLight
          color="white"
          position={[-5, 5, -5]}
          distance={20}
          intensity={2}
        />
        {/* <directionalLight color="white" position={[5, 5, 5]} intensity={0.4} /> */}

        <OrbitControls target={[0, 0, 2]} />
        <Stats />
      </Canvas>
    </div>
  );
}

export default StageModel;
