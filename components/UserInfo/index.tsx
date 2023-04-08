import { useCart } from "@/context/CartContext";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Image from "next/image";
import styles from "./UserInfo.module.scss";

export const UserInfo = () => {
  const { cart } = useCart();

  const total = cart.total;

  return (
    <div className={styles.body}>
      <div className={styles.userHeader}>
        <Badge
          badgeContent={4}
          color="primary"
          className={styles.badgeNotification}
        >
          <NotificationsRoundedIcon />
        </Badge>
        <div className={styles.userInfo}>
          <Avatar className={styles.userAvatar} src="/panda-avatar.png" />
          <div>
            <p className={styles.userName}>Pandinha</p>
            <p className={styles.userProfile}>User</p>
          </div>
          <KeyboardArrowDownIcon />
        </div>
      </div>
      <div className={styles.userCardBack}></div>
      <div className={styles.userCard}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className={styles.paymentType}>Debit Card</p>
          <p className={styles.cardType}>VISA</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p className={styles.orderTotal}>$ {total}</p>
            <p className={styles.cardName}>Pandinha</p>
          </div>
          <div className={styles.cardInfo}>
            <Image
              className={styles.cardChip}
              alt="card-chip"
              width={30}
              height={15}
              src="/card-chip.png"
            />
            <p className={styles.cardNumber}>58253242</p>
          </div>
        </div>
      </div>
    </div>
  );
};
