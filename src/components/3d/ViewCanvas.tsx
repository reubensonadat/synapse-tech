"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment } from "@react-three/drei";

export default function ViewCanvas({ children }: { children: React.ReactNode }) {
    return (
        <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            gl={{
                antialias: true,
                alpha: true,
                preserveDrawingBuffer: true
            }}
            dpr={[1, 2]}
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
                <Environment preset="city" />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <spotLight position={[-10, 10, 5]} angle={0.3} intensity={0.5} />
                {children}
            </Suspense>
        </Canvas>
    );
}
