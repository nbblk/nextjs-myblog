import Posts from '../components/Posts/Posts';
import { getSortedPostsData } from '../lib/posts';
import Layout from '../components/Layout';

import styles from '../styles/Home.module.css';

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
