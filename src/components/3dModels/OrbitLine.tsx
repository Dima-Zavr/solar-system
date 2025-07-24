import * as THREE from 'three';

interface Props {
    semiMajorAxis: number;
    eccentricity: number;
    inclination: number;
}

export const OrbitLine = ({ semiMajorAxis, eccentricity, inclination }: Props) => {
    const points = [];
    const segments = 100;
    
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      const radius = (semiMajorAxis * (1 - eccentricity * eccentricity)) / 
                    (1 + eccentricity * Math.cos(angle));
      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);
      const y = Math.sin(inclination * Math.PI / 180) * z;
      const correctedZ = Math.cos(inclination * Math.PI / 180) * z;
      points.push(new THREE.Vector3(x, y, correctedZ));
    }
    
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    
    return (
      <line geometry={geometry}>
        <lineBasicMaterial color={0x888888} linewidth={1} />
      </line>
    );
  };