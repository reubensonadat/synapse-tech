"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

export default function StudioShape() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Sphere ref={meshRef} args={[1.5, 64, 64]} position={[0, 0, 0]} frustumCulled={false}>
            <MeshDistortMaterial
                color="#6D28D9"
                attach="material"
                distort={0.5}
                speed={2}
                roughness={0.1}
                metalness={0.9}
                emissive="#6D28D9"
                emissiveIntensity={0.2}
            />
        </Sphere>
    );
}
