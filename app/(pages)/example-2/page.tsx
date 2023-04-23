'use client';
import React from 'react';
import { gsap } from 'gsap';

function Example() {
  const box1 = React.useRef<HTMLDivElement>(null);
  const box2 = React.useRef<HTMLDivElement>(null);
  const box3 = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    gsap.to([box1.current, box3.current], {
      x: '+=460',
      duration: 1,
      repeat: -1,
      yoyo: true,
    });

    gsap.to([box2.current], {
      x: '+=460',
      duration: 1,
      repeat: -1,
      yoyo: true,
      delay: 1,
    });
  }, []);
  return (
    <>
      <h1>
        Basic example doing gsap anitation when component is loaded using refs
      </h1>
      <div className='playground'>
        <div className='box' ref={box1} />
        <div className='box' ref={box2} />
        <div className='box' ref={box3} />
      </div>
    </>
  );
}

export default Example;
