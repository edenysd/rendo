import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import model from "../../assets/barn_testing.glb?url";
import { useEffect } from "react";

const processMesh = ({ mesh, selectedWall }) => {
  mesh.material = mesh.material.clone();
  mesh.material.metalness = 0.9;
  if (selectedWall && mesh.name !== selectedWall?.name) {
    mesh.material.opacity = 0.05;
    mesh.material.transparent = true;
  } else {
    mesh.material.opacity = 1;
    mesh.material.transparent = false;
  }
};

function Scene({ selectedWall }) {
  const gltf = useLoader(GLTFLoader, model);
  console.log(gltf);

  useEffect(() => {
    gltf.scene.traverse(function (object) {
      if (object.isMesh) {
        processMesh({ mesh: object, selectedWall });
      }
    });
  });

  return <primitive object={gltf.scene} />;
}

export default Scene;
