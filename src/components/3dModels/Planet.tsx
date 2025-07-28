import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import type { IPlanetData } from '../../shared/interfaces/PlanetData';
import { OrbitLine } from './OrbitLine';
import { PlanetRings } from './PlanetRings';

interface IPlanetProps {
  planetData: IPlanetData;
}

export const Planet = ({ planetData }: IPlanetProps) => {
  const {
    semiMajorAxis,
    size,
    axialTilt,
    dayDuration,
    yearDuration,
    eccentricity,
    inclination,
    url,
    ringUrl = false,
  } = planetData;

  const planetRef = useRef<THREE.Mesh>(null);

  // Рассчитываем скорости вращения
  const rotationSpeed = (2 * Math.PI) / dayDuration;
  const orbitSpeed = (2 * Math.PI) / yearDuration;

  // Загружаем текстуру планеты
  const textureLoader = new THREE.TextureLoader();
  const planetTexture = textureLoader.load(url);

  // Анимация вращения планеты вокруг Солнца и вокруг своей оси
  useFrame(({ clock }) => {
    if (planetRef.current) {
      const elapsedTime = clock.getElapsedTime();

      // Вращение вокруг своей оси (день)
      planetRef.current.rotation.y = elapsedTime * rotationSpeed;

      // Положение на эллиптической орбите
      const orbitAngle = elapsedTime * orbitSpeed;
      const radius = (semiMajorAxis * (1 - eccentricity * eccentricity)) / (1 + eccentricity * Math.cos(orbitAngle));

      // Вычисляем позицию в орбитальной плоскости
      const x = radius * Math.cos(orbitAngle);
      const z = radius * Math.sin(orbitAngle);

      // Применяем наклон орбиты (инклинацию)
      const y = Math.sin((inclination * Math.PI) / 180) * z;
      const correctedZ = Math.cos((inclination * Math.PI) / 180) * z;

      planetRef.current.position.set(x, y, correctedZ);
    }
  });

  return (
    <>
      <group rotation={[(axialTilt * Math.PI) / 180, 0, 0]} ref={planetRef} position={[semiMajorAxis, 0, 0]}>
        <mesh>
          <sphereGeometry args={[size, 32, 32]} />
          <meshStandardMaterial map={planetTexture} metalness={0.1} roughness={0.7} />
        </mesh>
        {ringUrl && <PlanetRings size={size} ringUrl={ringUrl} />}
      </group>
      <OrbitLine semiMajorAxis={semiMajorAxis} eccentricity={eccentricity} inclination={inclination} />
    </>
  );
};
