import React, { useEffect, useRef } from "react";

const createStars = (container, count, radius) => {
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.className = "star";

    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    star.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    container.appendChild(star);
  }
};

const StarField = ({ count = 250 }) => {
  const innerRef = useRef();
  const outerRef = useRef();

  useEffect(() => {
    if (innerRef.current) {
      createStars(innerRef.current, count, 100);
    }
    if (outerRef.current) {
      createStars(outerRef.current, count, 180);
    }
  }, [count]);

  return (
    <div className="starfield-wrapper">
      <div className="star-sphere outer" ref={outerRef} />
      <div className="star-sphere inner" ref={innerRef} />
    </div>
  );
};

export default StarField;
