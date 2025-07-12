import { useState, useTransition, useEffect, useRef, forwardRef } from 'react';
import SierpinskiTriangle from './components/SierpinskiTriangle';
import './App.css'

const App = forwardRef(({ elapsed }, elementRef) => {
  const [seconds, setSeconds] = useState(0);
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    const tick = () => {
      startTransition(async () => {
        setSeconds((prev) => (prev % 10) + 1);
      });
    };

    const intervalID = setInterval(tick, 1000);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className="container" ref={elementRef}>
      <div>
        <SierpinskiTriangle x={0} y={0} s={1000}>
          {seconds}
        </SierpinskiTriangle>
      </div>
    </div>
  );
});

export default App;