import * as THREE from 'three';
import { useMemo } from 'react';

interface IPlanetRingsProps {
  size: number;
  ringUrl: string;
}

export const PlanetRings = ({ size, ringUrl }: IPlanetRingsProps) => {
  // Загрузка текстуры (будет перезагружаться при каждом рендере — можно оптимизировать)
  const textureLoader = new THREE.TextureLoader();
  const ringTexture = textureLoader.load(ringUrl);

  // Создание геометрии через useMemo
  const ringGeometry = useMemo(() => {
    const innerRadius = size * 1.2;
    const outerRadius = size * 2.2;
    const segments = 64;
    const geometry = new THREE.RingGeometry(innerRadius, outerRadius, segments);
  
    const pos = geometry.attributes.position;
    const newUVs: number[] = [];
  
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
  
      const angle = Math.atan2(y, x); // от -PI до PI
      const radius = Math.sqrt(x * x + y * y);
  
      const v = (angle + Math.PI) / (2 * Math.PI); // вдоль окружности
      const u = (radius - innerRadius) / (outerRadius - innerRadius); // по радиусу
  
      newUVs.push(u, v); // <-- поменяли местами: (u: радиус, v: угол)
    }
  
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(newUVs, 2));
  
    return geometry;
  }, [size]);

  return (
    <mesh geometry={ringGeometry} rotation={[Math.PI / 2, 0, 0]}>
      <meshStandardMaterial
        map={ringTexture}
        //alphaMap={ringTexture}
        transparent={true}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};