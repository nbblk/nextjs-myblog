import Head from "next/head";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import Link from "next/link";

import styles from '../styles/home.module.css';

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
      {/* {!home && !about ? (
        
      ) : null} */}
    </div>
  );
}
