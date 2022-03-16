import Layout from "../components/Layout";
import Projects from "../components/projects/Projects";

import { getSortedProjectsData } from "../lib/projects";

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}

export default function projects({ allProjectsData }) {
  return (
    <Layout>
      <Projects projects={allProjectsData}/>
    </Layout>
  );
}
