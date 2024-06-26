import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { random } from "maath";
import {
  Points as IPoints,
  BufferGeometry,
  NormalBufferAttributes,
  Material,
} from "three";

const Stars = () => {
  const ref = useRef<IPoints<
    BufferGeometry<NormalBufferAttributes>,
    Material | Material[]
  > | null>(null);

  const [sphere] = useState(
    () =>
      random.inSphere(new Float32Array(500), {
        radius: 1.2,
      }) as Float32Array
  );

  useFrame((_state, delta) => {
    if (ref.current != null) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="absolute inset-0 -z-20 w-full bg-background">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
