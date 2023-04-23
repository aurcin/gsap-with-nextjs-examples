'use client';
import React from 'react';
import { gsap } from 'gsap';

function Example() {
  const [reversed, setReversed] = React.useState<boolean>(false);

  const gsapRoot = React.useRef<HTMLDivElement>(null);
  const timeline1 = React.useRef<gsap.core.Timeline | null>(null);
  const timeline2 = React.useRef<gsap.core.Timeline | null>(null);

  React.useEffect(() => {
    timeline1.current?.reversed(reversed);
    timeline2.current?.reversed(reversed);
  }, [reversed]);

  React.useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      timeline1.current && timeline1.current.progress(0).kill();
      timeline1.current = gsap.timeline().to('.box', {
        x: 460,
        duration: 1,
        stagger: {
          each: 0.3,
        },
      });

      timeline2.current && timeline2.current.progress(0).kill();
      timeline2.current = gsap
        .timeline()
        .to('.box', { rotate: 360, duration: 2, repeat: -1, ease: 'linear' });

      return () => ctx.revert();
    });
  }, []);

  function handleReverse(e: React.MouseEvent) {
    setReversed(prev => !prev);
  }

  return (
    <>
      <h1>Basic example using timeline as reference</h1>
      <div className='playground' ref={gsapRoot}>
        <div className='box' />
        <div className='box' />
        <div className='box' />
      </div>
      <button className='button' onClick={handleReverse}>
        Reverse
      </button>
    </>
  );
}

export default Example;
