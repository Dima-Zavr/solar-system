import * as THREE from 'three';
import { useMemo } from 'react';
interface Props {
  semiMajorAxis: number;
  eccentricity: number;
  inclination: number;
}

export const OrbitLine = ({ semiMajorAxis, eccentricity, inclination }: Props) => {
  const line = useMemo(() => {
    const points = [];
    const segments = 100;

    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      const radius = (semiMajorAxis * (1 - eccentricity ** 2)) / (1 + eccentricity * Math.cos(angle));
      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);
      const y = Math.sin(THREE.MathUtils.degToRad(inclination)) * z;
      const correctedZ = Math.cos(THREE.MathUtils.degToRad(inclination)) * z;
      points.push(new THREE.Vector3(x, y, correctedZ));
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: 0x888888, transparent: true });
    return new THREE.Line(geometry, material);
  }, [semiMajorAxis, eccentricity, inclination]);

  return <primitive object={line} />;
};
