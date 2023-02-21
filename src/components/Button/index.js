import styles from "./Button.module.css";

function Button({ children, onClick, type = "button", fullWidth, ...rest }) {
  return (
    <button
      className={styles.btn}
      onClick={onClick}
      type={type}
      style={{ width: fullWidth ? "100%" : "auto" }}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
