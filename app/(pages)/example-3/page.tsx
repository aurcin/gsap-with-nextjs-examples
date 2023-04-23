'use client';
import React from 'react';
import { gsap } from 'gsap';

function Example1() {
  const gsapRoot = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.box:first-child, .box:last-child', {
        x: '+=460',
        duration: 1,
        repeat: -1,
        yoyo: true,
      });
    }, gsapRoot);

    gsap.to('.box:nth-child(2)', {
      x: '+=460',
      duration: 1,
      repeat: -1,
      yoyo: true,
      delay: 1,
    });
    return () => ctx.revert();
  }, []);
  return (
    <>
      <h1>Basic example doing gsap anitation when component is loaded</h1>
      <div className='playground' ref={gsapRoot}>
        <div className='box' />
        <div className='box' />
        <div className='box' />
      </div>
    </>
  );
}

export default Example1;
