import React, { useEffect, useRef } from "react";
import { TweenLite } from "gsap";
import { setState, addStateChangeListener, removeAllListeners } from "./state";

const animatedCompStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  transform: "none",
  width: "50px",
  height: "50px",
  borderRadius: "50px",
  backgroundColor: "#2AB7CA"
};

const AnimatedComponent = props => {
  const compRef = useRef(null);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);

    addStateChangeListener(state => {
      if (props.version.useTopLeft) {
        TweenLite.to(compRef.current, 1, {
          x: 0,
          y: 0,
          top: state.y,
          left: state.x
        });
      } else {
        TweenLite.to(compRef.current, 1, {
          top: 0,
          left: 0,
          x: state.x,
          y: state.y
        });
      }
    });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      removeAllListeners();
    };
  });

  const onMouseMove = e => {
    setState({
      x: e.clientX - 25,
      y: e.clientY - 25
    });
  };

  return <div style={animatedCompStyle} ref={compRef} />;
};

export default AnimatedComponent;
