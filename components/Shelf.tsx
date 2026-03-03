import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import Book3D from './Book3D';

// Dummy data – you’ll replace this with Supabase fetch later
const dummyBooks = [
  { id: '1', title: "Mom's Recipes", color: '#ff6b6b', open: false },
  { id: '2', title: "Dad's BBQ", color: '#4ecdc4', open: false },
  { id: '3', title: "Friend's Desserts", color: '#ff9f1c', open: false },
];

export default function Shelf() {
  return (
    <div className="w-full h-96 max-w-4xl">
      <Canvas camera={{ position: [0, 2, 6], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <Suspense fallback={null}>
          {dummyBooks.map((book, i) => (
            <Book3D
              key={book.id}
              position={[-2 + i * 2, 0, 0]}
              title={book.title}
              color={book.color}
            />
          ))}
        </Suspense>
        {/* Wiggle on scroll – simple approach using CSS */}
        <Html fullscreen>
          <div className="absolute inset-0 pointer-events-none">
            {/* The wiggle effect will be added via Framer Motion on the container */}
          </div>
        </Html>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
