import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

interface PlanetProps {
  position: [number, number, number];
  size: number;
  url: string;
}
export const Planet = ({ position, size, url }: PlanetProps) => {
  const planetRef = useRef<THREE.Mesh>(null);
  
  // Загружаем текстуру Земли (можно заменить на любую другую планету)
  const textureLoader = new THREE.TextureLoader();
  const planetTexture = textureLoader.load(url);
  
  // Анимация вращения планеты вокруг Солнца и вокруг своей оси
  useFrame(({ clock }) => {
    if (planetRef.current) {
      const time = clock.getElapsedTime();
      planetRef.current.position.x = Math.cos(time * 0.5) * position[0];
      planetRef.current.position.z = Math.sin(time * 0.5) * position[0];
      planetRef.current.rotation.y += 0.01;
    }
  });
  
  return (
    <mesh ref={planetRef} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial 
        map={planetTexture} 
        metalness={0.1}
        roughness={0.7}
      />
    </mesh>
  );
};
