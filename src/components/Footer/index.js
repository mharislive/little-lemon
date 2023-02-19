import Container from "../Container";
import Nav from "../Nav";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.content}>
        <div className={styles.section}>
          <div>
            <img src="/images/restauranfood.jpg" alt="person serving food" />
          </div>
          <section>
            <h2>Doormat Navigation</h2>
            <Nav />
          </section>
        </div>
        <div className={styles.section}>
          <section>
            <h2>Contact</h2>
            <ul>
              <li>Address</li>
              <li>Phone number</li>
              <li>Email</li>
            </ul>
          </section>
          <section>
            <h2>Social Media Links</h2>
            <ul>
              <li>Address</li>
              <li>Phone number</li>
              <li>Email</li>
            </ul>
          </section>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
