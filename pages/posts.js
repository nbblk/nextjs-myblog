import Posts from "../components/Posts/Posts";
import Layout from "../components/Layout";

import { getSortedPostsData } from "../lib/posts";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function posts({ allPostsData }) {
  return (
    <Layout home>
      <div className={styles.home}>
        <Posts posts={allPostsData} />
      </div>
    </Layout>
  );
}
