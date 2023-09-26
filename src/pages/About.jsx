import PageNav from "../components/PageNav";
import styles from "./About.module.css";

function About() {
  return (
    <main className={styles.About}>
      <PageNav />
      <section>
        <div>
          <h2>About.</h2>
          <p>
            We believe that every journey holds valuable stories, and we are
            here to help you tell them.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
export default About;
