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
      <div className={styles.cardWrapper}>
        {Object.keys(cart).length > 1 ? (
          Object.keys(cart)?.map((productId) => {
            const cartItem = cart[parseInt(productId)];
            if (!cartItem) {
              return null;
            }
            const product = cartItem?.product;
            const quantity = cartItem?.quantity;

            return (
              <div key={productId} className={styles.cartItemWrapper}>
                <Image
                  width="50"
                  height="50"
                  alt="pizza"
                  src={product?.image}
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
                  <p className={styles.itemName}>{product?.name}</p>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className={styles.quantityWrapper}>
                      <p className={styles.quantity}>x</p>
                      <p className={styles.itemQuantity}>{quantity}</p>
                    </div>
                    <div className={styles.priceWrapper}>
                      <p className={styles.currency}>$</p>
                      <p className={styles.itemPrice}>{product?.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>Nenhum produto no carrinho</p>
        )}
      </div>
      <div>
        <button className={styles.checkoutButton}>Checkout</button>
      </div>
    </div>
  );
};
