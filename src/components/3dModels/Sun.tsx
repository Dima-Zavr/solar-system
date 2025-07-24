import { useRef } from 'react';
import * as THREE from 'three';

export const Sun = () => {
    const sunRef = useRef<THREE.Mesh>(null);
    
    // Загружаем текстуру Солнца
    const textureLoader = new THREE.TextureLoader();
    const sunTexture = textureLoader.load('/src/assets/textures/sun.jpg');
    
    return (
      <mesh ref={sunRef}>
        <sphereGeometry args={[5, 32, 32]} />
        <meshStandardMaterial 
          map={sunTexture} 
          emissiveMap={sunTexture}
          emissiveIntensity={1}
          emissive={new THREE.Color(0xffff00)}
        />
      </mesh>
    );
  };