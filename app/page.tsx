import Link from 'next/link';

import styles from './style.module.css';

function Home() {
  return (
    <>
      <h1>Here you can find some examples of usage gsap with nextjs project</h1>
      <nav>
        <ol role='navigation'>
          <li>
            <Link href='/example-1' className={styles.linkContainer}>
              Basic example
            </Link>
          </li>
        </ol>
      </nav>
    </>
  );
}

export default Home;
