import Layout from "../components/layout";

import styles from "../styles/about.module.css";

function About() {
  return (
    <Layout about>
      <div className={styles.about}>
        <div className={styles.imgWrapper}>
          <img className={styles.pic} src="/images/profile.jpg" />
        </div>
        <p className={styles.description}>
          Hi, I'm Blake(Heejin) Sim.
          <br />
          <br />
          I've worked as a full-stack web developer for a year in Seoul, Korea,
          and looking for a slight career shift to frontend engineer to deep
          dive in practical, user-friendly, and aesthetic UI programming. The
          tech stack I am using is MERN, which is MongoDB, Express.js, React,
          NodeJS, and TailwindCSS but always eager to learn something new. I'm
          interested in many things, including UI/UX design, SEO, Web
          technologies, software engineering process, and technical writing.
        </p>
        <p className={styles.description}>
          My educational background started from Journalism, however, during the
          pandemic, I decided to fill up Computer Science knowledge to pursue my
          tech career in the long term, and I will graduate next month. In
          retrospect, 2 years of strugging helped me teach myself (and also how
          not to feel bad when you have no idea what you learn) and integrate
          the knowledge in plain language while learning Computer Science.
        </p>
        <p className={styles.description}>
          I am knowledge-enthusiast, enjoy problem solving and the feeling of
          getting improved every day, by communicating people who have better
          idea than me. I also love reading, playing piano, learning new
          languages with open-minded people. <br /><br />
          If you want to contact me, <br /> please do so at{" "}
          <a href="mailto: nbblks@gmail.com">nbblks@gmail.com</a>.
        </p>
      </div>
    </Layout>
  );
}

export default About;
