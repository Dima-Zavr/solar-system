import { useRef } from 'react';
import * as THREE from 'three';

export const Sun = () => {
  const sunRef = useRef<THREE.Mesh>(null);

  // Загружаем текстуру Солнца
  const textureLoader = new THREE.TextureLoader();
  const sunTexture = textureLoader.load('/src/assets/textures/sun.jpg');

  return (
    <mesh ref={sunRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        map={sunTexture}
        emissive={new THREE.Color(0xffff00)}
        emissiveIntensity={5}
        toneMapped={false} // ← важно для Bloom!
      />
    </mesh>
  );
};
