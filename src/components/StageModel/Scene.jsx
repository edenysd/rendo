import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import model from "../../assets/barn_testing.glb?url";
import { useEffect, useState } from "react";
import { Box3, BoxHelper, Vector3 } from "three";
import { Html } from "@react-three/drei";

function getCenterPoint(mesh) {
  var middle = new Vector3();
  var geometry = mesh.geometry;

  geometry.computeBoundingBox();

  middle.x = (geometry.boundingBox.max.x + geometry.boundingBox.min.x) / 2;
  middle.y = (geometry.boundingBox.max.y + geometry.boundingBox.min.y) / 2;
  middle.z = (geometry.boundingBox.max.z + geometry.boundingBox.min.z) / 2;

  mesh.localToWorld(middle);
  return middle;
}

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

const checkForLabelUpdate = ({ mesh, selectedWall, nextMarkLabel }) => {
  if (mesh.name === selectedWall?.name) {
    const middle = getCenterPoint(mesh);

    nextMarkLabel.label = selectedWall.label;
    nextMarkLabel.position = middle;
    nextMarkLabel.box = new BoxHelper(mesh, "#000");
  }
};

function Scene({ selectedWall }) {
  const gltf = useLoader(GLTFLoader, model);
  const [markLabel, updateMarkLabel] = useState({
    label: "",
    position: null,
    box: null,
  });

  useEffect(() => {
    const nextMarkLabel = { label: "", position: null, box: null };

    gltf.scene.traverse(function (object) {
      if (object.isMesh) {
        processMesh({ mesh: object, selectedWall });
        checkForLabelUpdate({ mesh: object, selectedWall, nextMarkLabel });
      }
    });

    updateMarkLabel(nextMarkLabel);
  }, [selectedWall]);

  return (
    <>
      <primitive object={gltf.scene} />
      {markLabel.box ? <primitive object={markLabel.box} /> : null}
      {markLabel.position ? (
        <Html position={markLabel.position}>
          <div
            className="translate-x-[-50%] translate-y-[-50%] pointer-events-none select-none
          text-pretty font-bold text-2xl
          "
          >
            {markLabel.label}
          </div>
        </Html>
      ) : null}
    </>
  );
}

export default Scene;
