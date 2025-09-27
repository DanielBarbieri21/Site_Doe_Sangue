'use client';

import { motion } from 'framer-motion';
import { Heart, Droplets, Sparkles, Zap } from 'lucide-react';

const floatingElements = [
  {
    icon: Heart,
    size: 'w-4 h-4',
    color: 'text-primary-400',
    delay: 0,
    duration: 3,
  },
  {
    icon: Droplets,
    size: 'w-3 h-3',
    color: 'text-accent-400',
    delay: 0.5,
    duration: 4,
  },
  {
    icon: Sparkles,
    size: 'w-2 h-2',
    color: 'text-yellow-400',
    delay: 1,
    duration: 2.5,
  },
  {
    icon: Zap,
    size: 'w-3 h-3',
    color: 'text-purple-400',
    delay: 1.5,
    duration: 3.5,
  },
];

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -100, -200],
            x: [0, Math.random() * 50 - 25, Math.random() * 100 - 50],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 5 + 2,
          }}
        >
          <element.icon className={`${element.size} ${element.color}`} />
        </motion.div>
      ))}
    </div>
  );
}
