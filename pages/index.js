import Head from 'next/head'
import Posts from '../components/posts/posts';
import { getSortedPostsData } from '../lib/posts';
import Layout from '../components/layout';

import styles from '../styles/home.module.css';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
};

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <div className={styles.home}>
        <Posts posts={allPostsData}/>
      </div>
    </Layout>
  );
};
