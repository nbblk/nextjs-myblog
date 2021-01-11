import Head from "next/head";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";

import styles from '../styles/Home.module.css';

export default function Layout({ children, home, about }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="portfolo website" />
      </Head>
      <Header />
      <Sidebar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
