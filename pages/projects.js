import Layout from "../components/layout";
import Projects from "../components/Projects/Projects";

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
