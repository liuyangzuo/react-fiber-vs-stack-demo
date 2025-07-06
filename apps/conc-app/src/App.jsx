import React, {useState, useTransition, useEffect} from 'react';
import SierpinskiTriangle from './components/SierpinskiTriangle';
import './App.css'

const App = ({ elapsed }) => {
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

  const t = (elapsed / 1000) % 10;
  const scale = 1 + (t > 5 ? 10 - t : t) / 10;
  const transform = `scaleX(${scale / 2.1}) scaleY(0.7) translateZ(0.1px)`;

  return (
    <div className="container" /*style={{ transform }}*/>
      <div>
        <SierpinskiTriangle x={0} y={0} s={1000}>
          {seconds}
        </SierpinskiTriangle>
      </div>
    </div>
  );
};

export default App;