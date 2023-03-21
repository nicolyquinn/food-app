import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Image from "next/image";
import styles from "./Cart.module.scss";

const cartItems = [
  {
    id: 1,
    itemImage: "/mushroom-pizza.png",
    itemName: "Mushroom Pizza",
    itemQuantity: "1",
    itemPrice: "7.49",
  },
  {
    id: 2,
    itemImage: "/italian-pizza.webp",
    itemName: "Italian Pizza",
    itemQuantity: "2",
    itemPrice: "13.18",
  },
  {
    id: 3,
    itemImage: "/sausage-pizza.png",
    itemName: "Sausage Pizza",
    itemQuantity: "1",
    itemPrice: "5.49",
  },
];

export const Cart = () => {
  return (
    <div className={styles.body}>
      <div className={styles.orderHeader}>
        <h2>Order Menu</h2>
        <div className={styles.viewAll}>
          <p>View All</p>
          <ArrowForwardIosRoundedIcon className={styles.viewAllArrow} />
        </div>
      </div>
      {cartItems?.map((item) => (
        <div key={item.id} className={styles.cartItemWrapper}>
          <Image
            width="50"
            height="50"
            alt="pizza"
            src={item.itemImage}
            className={styles.itemImage}
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
            <p className={styles.itemName}>{item.itemName}</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className={styles.quantityWrapper}>
                <p className={styles.quantity}>x</p>
                <p className={styles.itemQuantity}>{item.itemQuantity}</p>
              </div>
              <div className={styles.priceWrapper}>
                <p className={styles.currency}>$</p>
                <p className={styles.itemPrice}>{item.itemPrice}</p>
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
