import PageNav from "../components/PageNav";
//story menggunakan module yang sama dengan About
import styles from "./About.module.css";

function Story() {
  return (
    <main className={styles.About}>
      <PageNav />
      <section>
        <img src="img-1.jpg" alt="img-1" />
        <div>
          <h2>About WorldWise.</h2>
          <p>
            Join our community and celebrate the beauty of this world with us.
            This site is the perfect place to share your travel experiences with
            friends and family. We`re here to capture your precious travel
            moments and share them with the world. So, come join us in exploring
            the world and leaving your travel footprint here
          </p>
        </div>
      </section>
    </main>
  );
}

export default Story;
