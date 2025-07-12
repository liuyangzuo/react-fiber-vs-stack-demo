import './stack.css'
import App from './App.jsx'
import ReactDOM from 'react-dom';
import React, { useEffect, useRef } from 'react';

const animation = (time) => {
  const t = (time / 1000) % 10;
  const scale = 1 + (t > 5 ? 10 - t : t) / 10;
  return { transform: `scaleX(${scale / 2.1}) scaleY(0.7) translateZ(0.1px)` };
}

const AnimatedApp = () => {

  let elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      let animationFrameId;

      const Update = (elapsed) => {
        if (elementRef.current) {
          const { transform } = animation(elapsed);
          elementRef.current.style.transform = transform;
        }
        animationFrameId = requestAnimationFrame(Update);
      };
      // Initiate the first requestAnimationFrame
      // Store the frameId for future cancellation
      animationFrameId = requestAnimationFrame(Update);

      return () => cancelAnimationFrame(animationFrameId);
    }
  }, []);

  return <App ref={elementRef} />
}

const container = document.getElementById('container');

ReactDOM.render(<AnimatedApp />, container);
