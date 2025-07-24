import { Canvas } from '@react-three/fiber';
import { Planet } from './components/3dModels/Planet';
import { OrbitControls, Stars } from '@react-three/drei';
import { Sun } from './components/3dModels/Sun';
import PLANET_DATA from './shared/constants/PlanedData';
import { OrbitLine } from './components/3dModels/OrbitLine';

export const App = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', background: 'black' }}>
      <Canvas camera={{ position: [0, 0, 250], fov: 60 }}>
        <ambientLight intensity={1} />
        <pointLight position={[0, 0, 0]} intensity={1} />

        {/* Солнце */}
        <Sun />

        {/* Меркурий */}
        <Planet planetData={PLANET_DATA.Mercury} />
        <OrbitLine
          semiMajorAxis={PLANET_DATA.Mercury.semiMajorAxis}
          eccentricity={PLANET_DATA.Mercury.eccentricity}
          inclination={PLANET_DATA.Mercury.inclination}
        />

        {/* Венера */}
        <Planet planetData={PLANET_DATA.Venus} />
        <OrbitLine
          semiMajorAxis={PLANET_DATA.Venus.semiMajorAxis}
          eccentricity={PLANET_DATA.Venus.eccentricity}
          inclination={PLANET_DATA.Venus.inclination}
        />

        {/* Земля */}
        <Planet planetData={PLANET_DATA.Earth} />
        <OrbitLine
          semiMajorAxis={PLANET_DATA.Earth.semiMajorAxis}
          eccentricity={PLANET_DATA.Earth.eccentricity}
          inclination={PLANET_DATA.Earth.inclination}
        />

        {/* Марс */}
        <Planet planetData={PLANET_DATA.Mars} />
        <OrbitLine
          semiMajorAxis={PLANET_DATA.Mars.semiMajorAxis}
          eccentricity={PLANET_DATA.Mars.eccentricity}
          inclination={PLANET_DATA.Mars.inclination}
        />

        {/* Юпитер */}
        <Planet planetData={PLANET_DATA.Jupiter} />
        <OrbitLine
          semiMajorAxis={PLANET_DATA.Jupiter.semiMajorAxis}
          eccentricity={PLANET_DATA.Jupiter.eccentricity}
          inclination={PLANET_DATA.Jupiter.inclination}
        />

        {/* Сатурн */}
        <Planet planetData={PLANET_DATA.Saturn} />
        <OrbitLine
          semiMajorAxis={PLANET_DATA.Saturn.semiMajorAxis}
          eccentricity={PLANET_DATA.Saturn.eccentricity}
          inclination={PLANET_DATA.Saturn.inclination}
        />

        {/* Уран */}
        <Planet planetData={PLANET_DATA.Uranus} />
        <OrbitLine
          semiMajorAxis={PLANET_DATA.Uranus.semiMajorAxis}
          eccentricity={PLANET_DATA.Uranus.eccentricity}
          inclination={PLANET_DATA.Uranus.inclination}
        />

        {/* Нептун */}
        <Planet planetData={PLANET_DATA.Neptune} />
        <OrbitLine
          semiMajorAxis={PLANET_DATA.Neptune.semiMajorAxis}
          eccentricity={PLANET_DATA.Neptune.eccentricity}
          inclination={PLANET_DATA.Neptune.inclination}
        />

        {/* Космический фон */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        {/* Орбитальные контролы для управления камерой */}
        <OrbitControls enableZoom={true} enablePan={false} enableRotate={true} minDistance={100} maxDistance={350} />
      </Canvas>
    </div>
  );
};
