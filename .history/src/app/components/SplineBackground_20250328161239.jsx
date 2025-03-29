"use client";
import React from "react";
import Spline from "@splinetool/react-spline";

const SplineBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Spline scene="https://prod.spline.design/t1rVdkCbequLvQgm/scene.splinecode" />
    </div>
  );
};

export default SplineBackground;