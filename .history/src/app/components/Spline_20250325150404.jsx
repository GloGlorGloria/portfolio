"use client";
import Spline from "@splinetool/react-spline";

const SplineBackground = () => {
  return (
    <div className="absolute inset-0 z-[-1] w-full h-full">
      <Spline scene="https://prod.spline.design/YOUR_SCENE_URL/scene.splinecode" />
    </div>
  );
};

export default SplineBackground;
