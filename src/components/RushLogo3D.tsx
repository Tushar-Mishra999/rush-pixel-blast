import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, Center } from "@react-three/drei";
import { useRef, useState, Suspense } from "react";
import * as THREE from "three";

const COLORS = [
  "#FF1F71", // primary - hot pink
  "#00F0FF", // secondary - cyan
  "#B026FF", // accent - purple
  "#FFFF00", // highlight - yellow
];

interface LetterProps {
  letter: string;
  position: [number, number, number];
  color: string;
  index: number;
  activeIndex: number;
  onHover: (index: number) => void;
}

const Letter = ({ letter, position, color, index, activeIndex, onHover }: LetterProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const isActive = activeIndex === index;

  useFrame((state) => {
    if (meshRef.current) {
      // Subtle floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + index) * 0.05;
      
      // Scale effect when active
      const targetScale = isActive ? 1.15 : hovered ? 1.08 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      
      // Subtle rotation when active
      if (isActive) {
        meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 3) * 0.1;
      } else {
        meshRef.current.rotation.y *= 0.95;
      }
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerEnter={() => {
          setHovered(true);
          onHover(index);
        }}
        onPointerLeave={() => setHovered(false)}
      >
        <Text3D
          font="/fonts/pixel.json"
          size={1.2}
          height={0.3}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelSegments={3}
        >
          {letter}
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={isActive ? 0.8 : 0.4}
            metalness={0.3}
            roughness={0.4}
          />
        </Text3D>
      </mesh>
      
      {/* Glow effect */}
      <pointLight
        color={color}
        intensity={isActive ? 2 : 0.8}
        distance={3}
        position={[0.6, 0.5, 1]}
      />
    </group>
  );
};

const FallbackLetter = ({ letter, color, isActive }: { letter: string; color: string; isActive: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.05;
      const targetScale = isActive ? 1.15 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[0.8, 1, 0.3]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={isActive ? 0.8 : 0.4}
      />
    </mesh>
  );
};

interface RushLogo3DProps {
  activeIndex: number;
  onHover: (index: number) => void;
}

const Scene = ({ activeIndex, onHover }: RushLogo3DProps) => {
  const letters = ["R", "U", "S", "H"];
  const spacing = 1.6;

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <directionalLight position={[-5, 5, -5]} intensity={0.3} />
      
      <Center>
        <group>
          {letters.map((letter, index) => (
            <Suspense
              key={letter}
              fallback={
                <group position={[(index - 1.5) * spacing, 0, 0]}>
                  <FallbackLetter letter={letter} color={COLORS[index]} isActive={activeIndex === index} />
                </group>
              }
            >
              <Letter
                letter={letter}
                position={[(index - 1.5) * spacing, 0, 0]}
                color={COLORS[index]}
                index={index}
                activeIndex={activeIndex}
                onHover={onHover}
              />
            </Suspense>
          ))}
        </group>
      </Center>
    </>
  );
};

export const RushLogo3D = ({ activeIndex, onHover }: RushLogo3DProps) => {
  return (
    <div className="w-full h-[120px] md:h-[180px] lg:h-[220px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene activeIndex={activeIndex} onHover={onHover} />
      </Canvas>
    </div>
  );
};
