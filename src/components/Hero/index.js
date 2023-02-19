import Button from "../Button";
import Container from "../Container";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <Container className={styles.heroContent}>
        <div className={styles.heroItem}>
          <h1 className={styles.title}>Little Lemon</h1>
          <h2 className={styles.subTitle}>Chicago</h2>
          <p className={styles.description}>
            We are a family owned Mediterranean restaurant, focused on tradional recipes served with a modern twist.
          </p>
          <Button>Reserve a Table</Button>
        </div>
        <div className={styles.heroItem}>
          <img src="/images/restauranfood.jpg" alt="person serving food" className={styles.img} />
        </div>
      </Container>
    </div>
  );
}

export default Hero;
