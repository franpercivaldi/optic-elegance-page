import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

function GlassFrame() {
  const meshRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      {/* Frame */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[1.2, 0.08, 8, 32]} />
        <meshPhongMaterial color="#8C7961" />
      </mesh>
      
      {/* Left lens */}
      <mesh position={[-0.7, 0, 0]}>
        <ringGeometry args={[0.4, 0.6, 32]} />
        <meshPhongMaterial color="#8C7961" />
      </mesh>
      
      {/* Right lens */}
      <mesh position={[0.7, 0, 0]}>
        <ringGeometry args={[0.4, 0.6, 32]} />
        <meshPhongMaterial color="#8C7961" />
      </mesh>
      
      {/* Left lens glass */}
      <mesh position={[-0.7, 0, 0.02]}>
        <circleGeometry args={[0.5, 32]} />
        <meshPhongMaterial 
          color="#ffffff" 
          transparent 
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Right lens glass */}
      <mesh position={[0.7, 0, 0.02]}>
        <circleGeometry args={[0.5, 32]} />
        <meshPhongMaterial 
          color="#ffffff" 
          transparent 
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Bridge */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.04, 0.04, 0.3, 8]} />
        <meshPhongMaterial color="#8C7961" />
      </mesh>
      
      {/* Left temple */}
      <mesh position={[-1.2, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
        <cylinderGeometry args={[0.03, 0.03, 1, 8]} />
        <meshPhongMaterial color="#8C7961" />
      </mesh>
      
      {/* Right temple */}
      <mesh position={[1.2, 0, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <cylinderGeometry args={[0.03, 0.03, 1, 8]} />
        <meshPhongMaterial color="#8C7961" />
      </mesh>
    </group>
  )
}

export default function GlassesModel3D() {
  return (
    <div className="w-full h-64 md:h-80">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        
        <GlassFrame />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  )
}