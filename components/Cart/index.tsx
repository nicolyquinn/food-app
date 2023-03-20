import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import styles from "./Cart.module.scss";

export const Cart = () => {
  return (
    <div className={styles.body}>
      <div className={styles.categoryHeader}>
        <h2>Order Menu</h2>
        <p>
          View All{" "}
          <ArrowForwardIosRoundedIcon className={styles.viewAllArrow} />
        </p>
      </div>
      <div>
        <button>Checkout</button>
      </div>
    </div>
  );
};
