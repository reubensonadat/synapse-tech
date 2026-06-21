"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Octahedron, Tetrahedron } from "@react-three/drei";
import * as THREE from "three";

/**
 * StudioShape — a floating crystalline amethyst cluster.
 * Reads as bespoke / exclusive / premium. Built entirely from free
 * drei primitives (no external assets). Purple-tinted to match brand.
 *
 * Composition:
 *  - Central faceted gem (octahedron) with subtle organic distortion +
 *    high metalness for light refraction.
 *  - Three orbiting shard satellites (tetrahedra) at different radii/speeds.
 *  - Wrapped in <Float> for a premium, weightless bob.
 */
export default function StudioShape() {
    const groupRef = useRef<THREE.Group>(null);
    const shardA = useRef<THREE.Mesh>(null);
    const shardB = useRef<THREE.Mesh>(null);
    const shardC = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        // Gentle whole-cluster drift
        if (groupRef.current) {
            groupRef.current.rotation.y = t * 0.12;
        }
        // Orbiting shards — each on its own radius & speed
        if (shardA.current) {
            shardA.current.position.x = Math.cos(t * 0.7) * 2.4;
            shardA.current.position.z = Math.sin(t * 0.7) * 2.4;
            shardA.current.position.y = Math.sin(t * 0.5) * 0.4;
            shardA.current.rotation.x = t * 0.6;
            shardA.current.rotation.y = t * 0.4;
        }
        if (shardB.current) {
            shardB.current.position.x = Math.cos(t * 0.5 + 2.1) * 2.9;
            shardB.current.position.z = Math.sin(t * 0.5 + 2.1) * 2.9;
            shardB.current.position.y = Math.cos(t * 0.4) * 0.5;
            shardB.current.rotation.z = t * 0.5;
        }
        if (shardC.current) {
            shardC.current.position.x = Math.cos(t * 0.9 + 4.2) * 2.1;
            shardC.current.position.z = Math.sin(t * 0.9 + 4.2) * 2.1;
            shardC.current.position.y = Math.sin(t * 0.6 + 1) * 0.6;
            shardC.current.rotation.x = t * 0.7;
        }
    });

    return (
        <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.9} floatingRange={[-0.15, 0.15]}>
            <group ref={groupRef}>
                {/* Central amethyst gem */}
                <Octahedron args={[1.5, 0]}>
                    <MeshDistortMaterial
                        color="#A88AED"
                        emissive="#6D28D9"
                        emissiveIntensity={0.25}
                        roughness={0.08}
                        metalness={0.85}
                        distort={0.18}
                        speed={1.2}
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                        envMapIntensity={1.4}
                    />
                </Octahedron>

                {/* Inner glow core */}
                <Octahedron args={[0.85, 0]}>
                    <meshStandardMaterial
                        color="#C9B5F5"
                        emissive="#A88AED"
                        emissiveIntensity={0.9}
                        transparent
                        opacity={0.35}
                    />
                </Octahedron>

                {/* Orbiting shards */}
                <Tetrahedron ref={shardA} args={[0.32, 0]}>
                    <meshStandardMaterial
                        color="#A88AED"
                        emissive="#7E5DD6"
                        emissiveIntensity={0.4}
                        roughness={0.1}
                        metalness={0.9}
                    />
                </Tetrahedron>

                <Tetrahedron ref={shardB} args={[0.24, 0]}>
                    <meshStandardMaterial
                        color="#C9B5F5"
                        emissive="#A88AED"
                        emissiveIntensity={0.5}
                        roughness={0.15}
                        metalness={0.85}
                    />
                </Tetrahedron>

                <Tetrahedron ref={shardC} args={[0.2, 0]}>
                    <meshStandardMaterial
                        color="#8C6EE0"
                        emissive="#6D28D9"
                        emissiveIntensity={0.45}
                        roughness={0.1}
                        metalness={0.9}
                    />
                </Tetrahedron>
            </group>
        </Float>
    );
}
