"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function StudioShape() {
    // Determine particle count based on performance needs, 2000 is a good balance
    const particleCount = 2000;

    // Create random positions for particles within a sphere
    const points = useMemo(() => {
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const color = new THREE.Color("#6D28D9"); // Synapse Purple

        for (let i = 0; i < particleCount; i++) {
            // spherical distribution
            const r = 2.5 * Math.cbrt(Math.random()); // Radius variation
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            let x = r * Math.sin(phi) * Math.cos(theta);
            let y = r * Math.sin(phi) * Math.sin(theta);
            let z = r * Math.cos(phi);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            // Varying colors slightly for depth
            color.setHSL(0.72, 0.8, 0.5 + Math.random() * 0.2); // Purple range
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }
        return { positions, colors };
    }, []);

    const pointsRef = useRef<THREE.Points>(null);

    useFrame((state) => {
        if (!pointsRef.current) return;

        const time = state.clock.getElapsedTime();

        // Rotate the entire cloud
        pointsRef.current.rotation.x = time * 0.05;
        pointsRef.current.rotation.y = time * 0.08;

        // Optional: Pulse scale
        const scale = 1 + Math.sin(time * 0.5) * 0.05;
        pointsRef.current.scale.set(scale, scale, scale);
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={points.positions.length / 3}
                    array={points.positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={points.colors.length / 3}
                    array={points.colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                vertexColors
                transparent
                opacity={0.8}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
}
