import * as THREE from "three";

const HeroLights = () => (
  <>
    <spotLight
      position={[2, 5, 6]}
      angle={0.15}
      penumbra={0.2}
      intensity={100}
      color="white"
    />

    <spotLight
      position={[4, 5, 4]}
      angle={0.3}
      penumbra={0.5}
      intensity={20}
      color="#4cc9f0"
    />

    <spotLight
      position={[-3, 5, 5]}
      angle={0.4}
      penumbra={0.5}
      intensity={30}
      color="#9d4edd"
    />

    <primitive
      object={new THREE.RectAreaLight("#a259ff", 8, 3, 2)}
      position={[1, 3, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      intensity={15}
    />

    <pointLight position={[1, 1, 1]} intensity={10} color="#7209b7" />
    <pointLight position={[3, 4, 1]} intensity={10} color="#0d00a4" />
  </>
);

export default HeroLights;
