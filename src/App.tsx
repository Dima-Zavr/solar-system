import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { Sun } from './components/3dModels/Sun';
import { SpaceBackground } from './components/3dModels/SpaceBackground';
import PLANET_DATA from './shared/constants/PlanedData';
import { Planet } from './components/3dModels/Planet';

export const App = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', background: 'white' }}>
      <Canvas camera={{ position: [-35, 80, 80], fov: 90 }}>
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

        <OrbitControls enableZoom={true} enablePan={false} enableRotate={true} minDistance={10} maxDistance={470} />
      </Canvas>
    </div>
  );
};
