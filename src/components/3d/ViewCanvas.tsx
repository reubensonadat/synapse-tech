"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, ContactShadows } from "@react-three/drei";

/**
 * ViewCanvas — shared R3F canvas with cinematic lighting tuned for the
 * premium PBR materials (metalness / clearcoat / distort) used by the
 * Studio gem and Systems energy core.
 */
export default function ViewCanvas({ children }: { children: React.ReactNode }) {
    return (
        <Canvas
            camera={{ position: [0, 0, 6], fov: 42 }}
            gl={{
                antialias: true,
                alpha: true,
                powerPreference: "high-performance",
            }}
            dpr={[1, 1.5]}
            style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                pointerEvents: 'none'
            }}
        >
            <Suspense fallback={null}>
                {/* Image-based lighting for realistic reflections on metal/clearcoat */}
                <Environment preset="city" />

                {/* Key + rim + fill — three-point cinematic lighting */}
                <ambientLight intensity={0.35} />
                <directionalLight position={[5, 6, 5]} intensity={1.4} castShadow />
                <pointLight position={[-6, -2, -4]} intensity={1.2} color="#A88AED" />
                <pointLight position={[6, -3, 2]} intensity={0.9} color="#6EABC6" />
                <spotLight position={[0, 8, 2]} angle={0.4} intensity={0.8} penumbra={1} />

                {children}

                {/* Soft ground shadow for tangibility */}
                <ContactShadows
                    position={[0, -2.4, 0]}
                    opacity={0.35}
                    scale={10}
                    blur={2.6}
                    far={4}
                    color="#1a1030"
                />
            </Suspense>
        </Canvas>
    );
}
