import type React from "react";

interface GradientBoxProps {
  className?: string;
  children?: React.ReactNode;
}

// This will be a gradient box for each section, I plan on including some
// Noise to make it look neater.
export default function GradientBox({ className, children }: GradientBoxProps) {
  return (
    <div
      className={`bg-gradient-to-br from-background via-secondary to-primary rounded-2xl border-1 overflow-hidden relative ${className}`}
    >
      <div className="bg-[url(/noise.svg)] bg-repeat opacity-30 absolute w-full h-full"></div>
    </div>
  );
}
