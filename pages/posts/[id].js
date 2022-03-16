import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Link from 'next/link';

import styles from "../../styles/Post.module.css";

export default function Post({ postData }) {
  return (
    <Layout className={styles.container}>
      <section className={styles.post}>
        <h3 className={styles.date}>{postData.date}</h3>
        <h1 className={styles.title}>{postData.title}</h1>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        ></div>
        <Link href="/posts/">
          <a className={styles.goBack}>Go back</a>
        </Link>
      </section>
      <br />
      <br />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
