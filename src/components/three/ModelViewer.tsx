import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';

interface ModelProps {
  modelPath: string;
}

function Model({ modelPath }: ModelProps) {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF('../a_playful_boy_with_an_0521055401_texture.glb'); // Replace with actual model when available

  // Gentle auto-rotation
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005;
    }
  });
  
  return (
    <group ref={group}>
      <primitive object={scene} scale={1} position={[0, 0, 0]} />
    </group>
  );
}

interface ModelViewerProps {
  modelPath: string;
  height?: string;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ modelPath, height = '400px' }) => {
  return (
    <div style={{ height, width: '100%' }} className="rounded-lg overflow-hidden bg-neutral-100">
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 50 }}>
        <color attach="background" args={['#f8faf8']} />
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5}>
            <Model modelPath={modelPath} />
          </Stage>
        </Suspense>
        <OrbitControls 
          enablePan={true} 
          enableZoom={true} 
          enableRotate={true}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default ModelViewer;