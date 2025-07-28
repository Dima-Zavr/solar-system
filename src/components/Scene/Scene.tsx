import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { Sun } from '../3dModels/Sun';
import { SpaceBackground } from '../3dModels/SpaceBackground';
import { Planet } from '../3dModels/Planet';
import PLANET_DATA from '../../shared/constants/PlanedData';

export const Scene = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', background: 'white' }}>
      <Canvas camera={{ position: [-60, 80, 80], fov: 60 }}>
        <SpaceBackground url="/src/assets/textures/stars.jpg" />

        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={500} />

        <Sun />

        {/* Все планеты */}
        {Object.values(PLANET_DATA).map((data) => (
          <Planet key={data.name} planetData={data} />
        ))}

        <EffectComposer>
          <Bloom
            luminanceThreshold={0.1}
            luminanceSmoothing={0.9}
            intensity={2.5}
            blendFunction={BlendFunction.ADD}
          />
        </EffectComposer>

        <OrbitControls enableZoom={true} enablePan={false} enableRotate={true} minDistance={10} maxDistance={500} />
      </Canvas>
    </div>
  );
};
