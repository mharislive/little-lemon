import Nav from "../Nav";
import Container from "../Container";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContent}>
        <a href="/">
          <img src="/images/logo.svg" alt="Little Lemon Logo" />
        </a>
        <Nav />
      </Container>
    </header>
  );
}

export default Header;
