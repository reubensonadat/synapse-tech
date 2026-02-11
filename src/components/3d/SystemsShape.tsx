"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Icosahedron } from "@react-three/drei";
import * as THREE from "three";

export default function SystemsShape() {
    const groupRef = useRef<THREE.Group>(null);

    // Create geometry for points at vertices
    const pointsGeometry = useMemo(() => {
        const geometry = new THREE.IcosahedronGeometry(1.6, 0); // Matches the main mesh size
        return geometry;
    }, []);

    useFrame((state) => {
        if (groupRef.current) {
            const time = state.clock.getElapsedTime();
            groupRef.current.rotation.y = time * 0.15;
            groupRef.current.rotation.z = time * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Main connected network structure */}
            <Icosahedron args={[1.6, 0]} frustumCulled={false}>
                <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.3} />
            </Icosahedron>

            {/* Inner solid core for presence */}
            <Icosahedron args={[1.4, 0]} frustumCulled={false}>
                <meshBasicMaterial color="#1e3a8a" wireframe transparent opacity={0.1} />
            </Icosahedron>

            {/* Nodes at vertices */}
            <points geometry={pointsGeometry}>
                <pointsMaterial
                    size={0.1}
                    color="#60a5fa"
                    sizeAttenuation
                    transparent
                    opacity={0.8}
                />
            </points>

            {/* Outer data layer */}
            <Icosahedron args={[2.0, 1]} frustumCulled={false}>
                <meshBasicMaterial color="#93c5fd" wireframe transparent opacity={0.05} />
            </Icosahedron>
        </group>
    );
}
