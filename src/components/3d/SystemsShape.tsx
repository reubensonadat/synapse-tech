"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron, Torus } from "@react-three/drei";
import * as THREE from "three";

/**
 * SystemsShape — a living, distorted energy core.
 * Reads as powerful / alive / systematic. Built entirely from free
 * drei primitives (no external assets). Blue-tinted to match brand.
 *
 * Composition:
 *  - Central organic core (icosahedron) with strong MeshDistortMaterial
 *    distortion — it breathes/morphs like a living system.
 *  - Two tilted orbital rings (torus) rotating on different axes.
 *  - Three electron nodes orbiting at different radii & speeds.
 *  - Outer wireframe shell for the "system boundary" feel.
 */
export default function SystemsShape() {
    const coreRef = useRef<THREE.Mesh>(null);
    const ringA = useRef<THREE.Mesh>(null);
    const ringB = useRef<THREE.Mesh>(null);
    const electronA = useRef<THREE.Mesh>(null);
    const electronB = useRef<THREE.Mesh>(null);
    const electronC = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        if (ringA.current) ringA.current.rotation.z = t * 0.25;
        if (ringB.current) {
            ringB.current.rotation.x = t * 0.18;
            ringB.current.rotation.y = t * 0.22;
        }

        // Electrons on tilted orbits
        if (electronA.current) {
            electronA.current.position.x = Math.cos(t * 1.1) * 2.3;
            electronA.current.position.z = Math.sin(t * 1.1) * 2.3;
            electronA.current.position.y = Math.sin(t * 1.1) * 0.6;
        }
        if (electronB.current) {
            electronB.current.position.x = Math.cos(t * 0.8 + 2) * 2.7;
            electronB.current.position.y = Math.sin(t * 0.8 + 2) * 2.7;
            electronB.current.position.z = Math.cos(t * 0.8 + 2) * 0.7;
        }
        if (electronC.current) {
            electronC.current.position.z = Math.cos(t * 1.4 + 4) * 2.1;
            electronC.current.position.y = Math.sin(t * 1.4 + 4) * 2.1;
            electronC.current.position.x = Math.sin(t * 1.4 + 4) * 0.5;
        }
    });

    return (
        <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8} floatingRange={[-0.12, 0.12]}>
            <group>
                {/* Living organic core */}
                <Icosahedron ref={coreRef} args={[1.3, 4]}>
                    <MeshDistortMaterial
                        color="#6EABC6"
                        emissive="#3D8FA8"
                        emissiveIntensity={0.35}
                        roughness={0.15}
                        metalness={0.7}
                        distort={0.38}
                        speed={2.2}
                        envMapIntensity={1.2}
                    />
                </Icosahedron>

                {/* Inner luminous core */}
                <Icosahedron args={[0.7, 0]}>
                    <meshStandardMaterial
                        color="#A9CFE0"
                        emissive="#6EABC6"
                        emissiveIntensity={1.1}
                        transparent
                        opacity={0.4}
                    />
                </Icosahedron>

                {/* Orbital ring A — horizontal */}
                <Torus ref={ringA} args={[2.2, 0.025, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshStandardMaterial
                        color="#6EABC6"
                        emissive="#6EABC6"
                        emissiveIntensity={0.6}
                        roughness={0.3}
                        metalness={0.6}
                        transparent
                        opacity={0.7}
                    />
                </Torus>

                {/* Orbital ring B — tilted */}
                <Torus ref={ringB} args={[2.6, 0.02, 16, 100]} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
                    <meshStandardMaterial
                        color="#A9CFE0"
                        emissive="#A9CFE0"
                        emissiveIntensity={0.5}
                        transparent
                        opacity={0.5}
                    />
                </Torus>

                {/* Outer system-boundary shell */}
                <Icosahedron args={[2.0, 1]}>
                    <meshBasicMaterial color="#6EABC6" wireframe transparent opacity={0.12} />
                </Icosahedron>

                {/* Orbiting electrons */}
                <mesh ref={electronA}>
                    <sphereGeometry args={[0.13, 24, 24]} />
                    <meshStandardMaterial color="#A9CFE0" emissive="#6EABC6" emissiveIntensity={1.2} />
                </mesh>
                <mesh ref={electronB}>
                    <sphereGeometry args={[0.1, 24, 24]} />
                    <meshStandardMaterial color="#6EABC6" emissive="#3D8FA8" emissiveIntensity={1.4} />
                </mesh>
                <mesh ref={electronC}>
                    <sphereGeometry args={[0.09, 24, 24]} />
                    <meshStandardMaterial color="#A9CFE0" emissive="#6EABC6" emissiveIntensity={1.3} />
                </mesh>
            </group>
        </Float>
    );
}
