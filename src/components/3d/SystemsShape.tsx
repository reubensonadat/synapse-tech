"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Icosahedron } from "@react-three/drei";
import * as THREE from "three";

export default function SystemsShape() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
            groupRef.current.rotation.z = state.clock.getElapsedTime() * 0.08;
        }
    });

    return (
        <group ref={groupRef}>
            <Icosahedron args={[1.6, 0]} frustumCulled={false}>
                <meshBasicMaterial color="#3b82f6" wireframe />
            </Icosahedron>
            <Icosahedron args={[1.65, 0]} frustumCulled={false}>
                <pointsMaterial size={0.05} color="#60a5fa" />
            </Icosahedron>
            <Icosahedron args={[1.0, 0]} frustumCulled={false}>
                <meshStandardMaterial
                    color="#1e3a8a"
                    roughness={0.1}
                    metalness={0.9}
                    emissive="#3b82f6"
                    emissiveIntensity={0.3}
                />
            </Icosahedron>
        </group>
    );
}
