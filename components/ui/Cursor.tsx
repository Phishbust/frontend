"use client"
// components/CustomCursor.js
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailingX = useSpring(cursorX, { stiffness: 50, damping: 15 });
  const trailingY = useSpring(cursorY, { stiffness: 50, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;

      cursorX.set(x - 8); // Offset by half the cursor size (assuming 16x16)
      cursorY.set(y - 8);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed w-4 h-4 bg-black rounded-full pointer-events-none z-50 max-md:hidden"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
      <motion.div
        className="fixed w-10 h-10 bg-white mix-blend-difference rounded-full pointer-events-none z-50 max-md:hidden"
        style={{
          x: trailingX,
          y: trailingY,
        }}
      />
    </>
  );
};

export default CustomCursor;
