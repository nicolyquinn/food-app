import { useCart } from "@/context/CartContext";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Image from "next/image";
import styles from "./Cart.module.scss";

export const Cart = () => {
  const { cart } = useCart();

  return (
    <div className={styles.body}>
      <div className={styles.orderHeader}>
        <h2>Order Menu</h2>
        <div className={styles.viewAll}>
          <p>View All</p>
          <ArrowForwardIosRoundedIcon className={styles.viewAllArrow} />
        </div>
      </div>
      {cart?.map((item) => (
        <div key={item.id} className={styles.cartItemWrapper}>
          <Image
            width="50"
            height="50"
            alt="pizza"
            src={item.image}
            className={styles.image}
            priority
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "center",
              marginLeft: "10px",
            }}
          >
            <p className={styles.itemName}>{item.name}</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className={styles.quantityWrapper}>
                <p className={styles.quantity}>x</p>
                <p className={styles.itemQuantity}>2</p>
              </div>
              <div className={styles.priceWrapper}>
                <p className={styles.currency}>$</p>
                <p className={styles.itemPrice}>{item.price}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div>
        <button className={styles.checkoutButton}>Checkout</button>
      </div>
    </div>
  );
};
