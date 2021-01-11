import Layout from "../../components/layout";
import { getAllProjectIds, getProjectData } from "../../lib/projects";
import Link from "next/link";

import styles from "../../styles/post.module.css";

export default function Project({ projectData }) {
  return (
    <Layout className={styles.container}>
      <section className={styles.post}>
        <h3 className={styles.date}>{projectData.date}</h3>
        <h1 className={styles.title}>{projectData.title}</h1>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
        ></div>
        <Link href="/projects/">
          <a className={styles.goBack}>Go back</a>
        </Link>
      </section>
      <br />
      <br />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id);
  return {
    props: {
        projectData,
    },
  };
}
