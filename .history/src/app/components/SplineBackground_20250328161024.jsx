"use client";
import React, { useEffect, useRef } from "react";

const SplineBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Prevent re-inserting the spline if already added
    if (!containerRef.current || containerRef.current.children.length > 0) return;

    const div = document.createElement("div");
    div.className = "spline-scene";
    div.dataset.wId = "10aa5035-d9a8-0f6d-542d-054bf8c50a96";
    div.dataset.animationType = "spline";
    div.dataset.splineUrl = "https://prod.spline.design/t1rVdkCbequLvQgm/scene.splinecode";
    div.style.position = "absolute";
    div.style.top = "0";
    div.style.left = "0";
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.zIndex = "-1"; // Push behind everything
    div.style.pointerEvents = "none"; // Allow clicks through it

    containerRef.current.appendChild(div);
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0" />;
};

export default SplineBackground;
