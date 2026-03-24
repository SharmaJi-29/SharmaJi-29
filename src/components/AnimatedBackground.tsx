import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: -10, overflow: 'hidden', background: '#020617' }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        opacity: 0.6,
        maskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)'
      }} />
      
      <motion.div
        animate={{ x: [0, 150, -50, 0], y: [0, -100, 100, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute', top: '10%', left: '10%', width: '40vw', height: '40vw',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%', filter: 'blur(80px)'
        }}
      />
      
      <motion.div
        animate={{ x: [0, -100, 150, 0], y: [0, 150, -100, 0], scale: [1, 0.8, 1.3, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute', bottom: '10%', right: '5%', width: '45vw', height: '45vw',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%', filter: 'blur(80px)'
        }}
      />

      <motion.div
        animate={{ x: [0, 100, -100, 0], y: [0, 50, 150, 0], scale: [1, 1.4, 0.8, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute', top: '40%', left: '40%', width: '35vw', height: '35vw',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%', filter: 'blur(80px)'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
