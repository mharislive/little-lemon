import { Link } from "react-router-dom";
import Nav from "../Nav";
import Container from "../Container";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContent}>
        <Link to="/">
          <img src="/images/logo.svg" alt="Little Lemon Logo" />
        </Link>
        <Nav />
      </Container>
    </header>
  );
}

export default Header;
