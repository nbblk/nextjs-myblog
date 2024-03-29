import Head from "next/head";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

import styles from "../styles/Home.module.css";

export default function Layout({ children, home, about }) {
  const menus = [
    { title: "ABOUT", path: "/about" },
    { title: "PROJECTS", path: "/projects" },
    { title: "POSTS", path: "/posts" },
  ];

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="portfolo website" />
      </Head>
      <Header menus={menus} />
      <Sidebar menus={menus} />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
