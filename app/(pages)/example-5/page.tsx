'use client';
import React from 'react';
import { gsap } from 'gsap';

function Example() {
  const [destination, setDestination] = React.useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const gsapRoot = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.box', {
        x: destination.x,
        y: destination.y,
        duration: 2,
      });

      return () => ctx.revert();
    });
  }, [destination]);

  function handleMouseClick(e: React.MouseEvent) {
    const target = e.target as HTMLDivElement;
    const x = e.clientX - target.offsetLeft - 60;
    const y = e.clientY - target.offsetTop - 60;

    setDestination({ x, y });
  }

  return (
    <>
      <h1>Animation on state change</h1>
      <p>click on skyblue square to move blue square</p>
      <div
        className='playground'
        style={{ height: '600px' }}
        ref={gsapRoot}
        onClick={handleMouseClick}
      >
        <div className='box' />
      </div>
      <p>
        x:{destination.x} y:{destination.y}
      </p>
    </>
  );
}

export default Example;
