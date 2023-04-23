import './globals.css';
import styles from './style.module.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gsap examples',
  description: 'Gsap librabry usage in next project example',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header>
          <nav>
            <Link href='/' className={styles.link}>
              Home
            </Link>
          </nav>
        </header>
        <main className={styles.container}>{children}</main>
      </body>
    </html>
  );
}
