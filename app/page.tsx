import Link from 'next/link';

import styles from './style.module.css';

function Home() {
  return (
    <>
      <h1>Here you can find some examples of gsap with nextjs usage </h1>
      <nav>
        <ol role='navigation'>
          <li>
            <Link href='/example-1' className={styles.linkContainer}>
              Basic on click animation example
            </Link>
          </li>
          <li>
            <Link href='/example-2' className={styles.linkContainer}>
              On component mount aniamtion example (using refs)
            </Link>
          </li>
          <li>
            <Link href='/example-3' className={styles.linkContainer}>
              On component mount aniamtion example (using gsap.context)
            </Link>
          </li>
          <li>
            <Link href='/example-4' className={styles.linkContainer}>
              Using timeline as reference
            </Link>
          </li>
        </ol>
      </nav>
    </>
  );
}

export default Home;
