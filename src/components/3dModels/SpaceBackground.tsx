import { useEffect } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export const SpaceBackground = ({ url }: { url: string }) => {
  const { scene } = useThree();
  const texture = useLoader(THREE.TextureLoader, url);

  // Нужно указать, что текстура — equirectangular‑панорама:
  texture.mapping = THREE.EquirectangularReflectionMapping;
  texture.colorSpace = THREE.SRGBColorSpace;

  useEffect(() => {
    scene.background = texture!;
    return () => {
      scene.background = null;
    };
  }, [scene, texture]);

  return null;
};