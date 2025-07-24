import { Canvas } from '@react-three/fiber';
import { Planet } from './components/3dModels/Planet';
import { OrbitControls, Stars } from '@react-three/drei';
import { Sun } from './components/3dModels/Sun';

export const App = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', background: "black", }}>
      <Canvas camera={{ position: [0, 0, 25], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={1} />

        {/* Солнце */}
        <Sun />

        {/* Меркурий */}
        <Planet position={[10, 0, 0]} size={0.5} url="/src/assets/textures/mercury.jpg" />

        {/* Венера */}
        <Planet position={[20, 0, 0]} size={1.2} url="/src/assets/textures/venus.jpg" />

        {/* Земля */}
        <Planet position={[30, 0, 0]} size={1.2} url="/src/assets/textures/earth.jpg" />

        {/* Марс */}
        <Planet position={[40, 0, 0]} size={0.7} url="/src/assets/textures/mars.jpg" />

        {/* Юпитер */}
        <Planet position={[70, 0, 0]} size={15} url="/src/assets/textures/jupiter.jpg" />

        {/* Сатурн */}
        <Planet position={[115, 0, 0]} size={12} url="/src/assets/textures/saturn.jpg" />

        {/* Уран */}
        <Planet position={[150, 0, 0]} size={5} url="/src/assets/textures/uranus.jpg" />

        {/* Нептун */}
        <Planet position={[180, 0, 0]} size={5} url="/src/assets/textures/neptune.jpg" />

        {/* Космический фон */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        {/* Орбитальные контролы для управления камерой */}
        <OrbitControls enableZoom={true} enablePan={false} enableRotate={true} />
      </Canvas>
    </div>
  );
};
