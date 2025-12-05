import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, Center, Float } from "@react-three/drei";
import { Suspense, useRef, useState, useMemo } from "react";
import * as THREE from "three";

const COLORS = ["#FF2D6A", "#00F0FF", "#FFD600", "#A855F7"];

interface LetterProps {
  letter: string;
  position: [number, number, number];
  color: string;
  index: number;
  isHovered: boolean;
  onHover: (index: number | null) => void;
}

const Letter = ({ letter, position, color, index, isHovered, onHover }: LetterProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [localHover, setLocalHover] = useState(false);
  
  const emissiveIntensity = useMemo(() => (localHover ? 2 : 0.5), [localHover]);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Subtle floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + index) * 0.05;
      
      // Rotation on hover
      if (localHover) {
        meshRef.current.rotation.y = THREE.MathUtils.lerp(
          meshRef.current.rotation.y,
          Math.sin(state.clock.elapsedTime * 3) * 0.2,
          0.1
        );
        meshRef.current.rotation.x = THREE.MathUtils.lerp(
          meshRef.current.rotation.x,
          Math.sin(state.clock.elapsedTime * 2) * 0.1,
          0.1
        );
      } else {
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, 0, 0.1);
        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, 0, 0.1);
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerEnter={() => {
        setLocalHover(true);
        onHover(index);
      }}
      onPointerLeave={() => {
        setLocalHover(false);
        onHover(null);
      }}
    >
      <Text3D
        font="/fonts/pixel.json"
        size={1.2}
        height={0.3}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        {letter}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={emissiveIntensity}
          metalness={0.8}
          roughness={0.2}
        />
      </Text3D>
      {/* Glow effect */}
      {localHover && (
        <pointLight color={color} intensity={2} distance={3} />
      )}
    </mesh>
  );
};

const RushText = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const letters = ["R", "U", "S", "H"];
  const spacing = 1.5;
  
  return (
    <Center>
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <group>
          {letters.map((letter, index) => (
            <Letter
              key={letter}
              letter={letter}
              position={[(index - 1.5) * spacing, 0, 0]}
              color={COLORS[index]}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={setHoveredIndex}
            />
          ))}
          {/* Ambient glow lights */}
          <pointLight position={[0, 2, 2]} color="#FF2D6A" intensity={0.5} />
          <pointLight position={[2, -1, 2]} color="#00F0FF" intensity={0.5} />
          <pointLight position={[-2, -1, 2]} color="#FFD600" intensity={0.5} />
        </group>
      </Float>
    </Center>
  );
};

// Fallback component while loading
const LoadingFallback = () => (
  <div className="flex justify-center items-center gap-2 md:gap-4">
    {["R", "U", "S", "H"].map((letter, index) => (
      <div
        key={letter}
        className={`font-pixel text-6xl md:text-8xl lg:text-9xl ${
          ["text-primary", "text-secondary", "text-accent", "text-highlight"][index]
        }`}
        style={{
          textShadow: "0 0 10px currentColor, 0 0 20px currentColor"
        }}
      >
        {letter}
      </div>
    ))}
  </div>
);

export const Rush3DLogo = () => {
  return (
    <div className="w-full h-[150px] md:h-[200px] lg:h-[250px] cursor-pointer">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={0.5} />
          <RushText />
        </Canvas>
      </Suspense>
    </div>
  );
};
