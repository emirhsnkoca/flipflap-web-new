'use client';

import { Canvas } from '@react-three/fiber';
import { View, Preload } from '@react-three/drei';

export default function Scene() {
  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none', // Tıklamaları alttaki DOM'a geçir
        zIndex: 30, // İçeriğin üstünde ama tıklanamaz (View track ile tıklama alınır)
      }}
      eventSource={document.body}
      eventPrefix="client"
    >
      <View.Port />
      <Preload all />
    </Canvas>
  );
}

