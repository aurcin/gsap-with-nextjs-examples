'use client';
import React from 'react';
import { gsap } from 'gsap';

import styles from './style.module.css';

function Example1() {
  function handleBoxClick(e: React.MouseEvent) {
    const box = e.target;
    gsap.fromTo(
      box,
      { x: 0 },
      { x: 100, duration: 0.3, yoyo: true, repeat: 1 }
    );
  }
  return (
    <>
      <h1>Basic example doing gsap anitation on click</h1>
      <div className='playground'>
        <div className='box box-clickable' onClick={handleBoxClick}>
          Click me
        </div>
      </div>
    </>
  );
}

export default Example1;
