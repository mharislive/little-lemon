import styles from "./SpecialCard.module.css";

function SpecialCard({ title, price, image, description }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.img} />
      <div className={styles.content}>
        <h2 className={styles.title}>
          {title} <span>{price}</span>
        </h2>
        <p className={styles.description}>{description}</p>
        <a href="/" className={styles.link}>
          Order a delivery
          <img src="/images/delivery.svg" alt="delivery icon" className={styles.icon} />
        </a>
      </div>
    </div>
  );
}

export default SpecialCard;
