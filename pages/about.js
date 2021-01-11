import Layout from "../components/Layout";

import styles from "../styles/about.module.css";

function About() {
  return (
    <Layout about>
      <div className={styles.about}>
        <div className={styles.imgWrapper}>
          <img className={styles.pic} src="/images/image1.jpg" />
        </div>
        <p className={styles.description}>
          Hi. I'm Blake Sim.
        </p>
      </div>
    </Layout>
  );
}

export default About;
