'use client';
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { motion } from 'framer-motion-3d';

type Book3DProps = {
  title: string;
  color: string;
  position: [number, number, number];
};

export default function Book3D({ title, color, position }: Book3DProps) {
  const ref = useRef<Mesh>(null);

  // Simple slow rotation for wiggle effect
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(performance.now() / 2000) * 0.05;
    }
  });

  return (
    <motion.mesh
      ref={ref}
      position={position}
      whileHover={{ scale: 1.05 }}
      onClick={() => alert(`Open ${title}`)} // placeholder – will become real navigation later
    >
      <boxGeometry args={[1.2, 1.6, 0.2]} />
      <meshStandardMaterial color={color} />
      {/* Title as a sprite – using Html from drei for simplicity */}
    </motion.mesh>
  );
}
