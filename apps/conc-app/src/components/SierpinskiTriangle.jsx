import React from 'react';
import Dot from "./Dot";

const targetSize = 25;

function SierpinskiTriangle({ x, y, s, children }) {
    if (s <= targetSize) {
      return (
        <Dot
          x={x - (targetSize / 2)}
          y={y - (targetSize / 2)}
          size={targetSize}
          text={children}
        />
      );
    }
    var slowDown = true;
    if (slowDown) {
      var e = performance.now() + 0.5;
      while (performance.now() < e) {
        // Artificially long execution time.
      }
    }

    s /= 2;

    return (
      <div>
        <SierpinskiTriangle x={x} y={y - (s / 2)} s={s}>
          {children}
        </SierpinskiTriangle>
        <SierpinskiTriangle x={x - s} y={y + (s / 2)} s={s}>
          {children}
        </SierpinskiTriangle>
        <SierpinskiTriangle x={x + s} y={y + (s / 2)} s={s}>
          {children}
        </SierpinskiTriangle>
      </div>
    );
  }

  export default React.memo(SierpinskiTriangle);