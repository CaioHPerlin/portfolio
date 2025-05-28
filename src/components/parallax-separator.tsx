import { motion, MotionValue, useTransform } from "motion/react";

import ParallaxLayer1 from "../assets/parallax/layer-1.svg";
import ParallaxLayer2 from "../assets/parallax/layer-2.svg";
import ParallaxLayer3 from "../assets/parallax/layer-3.svg";
import ParallaxLayer4 from "../assets/parallax/layer-4.svg";
import ParallaxLayer5 from "../assets/parallax/layer-5.svg";
import ParallaxLayer6 from "../assets/parallax/layer-6.svg";

const layers = [
  ParallaxLayer1, // Foreground
  ParallaxLayer2,
  ParallaxLayer3,
  ParallaxLayer4,
  ParallaxLayer5,
  ParallaxLayer6, // Background
];

interface ParallaxSeparatorProps {
  scrollYProgress: MotionValue<number>;
}

export default function ParallaxSeparator({
  scrollYProgress,
}: ParallaxSeparatorProps) {
  const SLOWDOWN_STEP = 32;
  const layerSpeeds = layers.map((_, i) => {
    return useTransform(scrollYProgress, [0, 1], [0, SLOWDOWN_STEP * i]);
  });

  return (
    <div className="absolute bottom-0 w-full h-[21rem] overflow-hidden">
      {layers.map((Layer, i) => (
        <motion.img
          key={i}
          style={{
            y: layerSpeeds[i],
            zIndex: layers.length - i,
          }}
          src={Layer}
          className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none"
          alt={`Parallax layer ${i + 1}`}
        />
      ))}
    </div>
  );
}
