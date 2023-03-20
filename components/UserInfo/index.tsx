import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import styles from "./UserInfo.module.scss";

export const UserInfo = () => {
  return (
    <div className={styles.body}>
      <div className={styles.userHeader}>
        <Badge badgeContent={4} color="secondary">
          <NotificationsRoundedIcon />
        </Badge>
        <div className={styles.userInfo}>
          <Avatar>H</Avatar>
          <p>Jeremy</p>
          <p>User</p>
          <KeyboardArrowDownIcon />
        </div>
      </div>
      <div className={styles.userCard}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Debit Card</p>
          <p>VISA</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p>$ 1560.00</p>
            <p>Jeremy Mathew</p>
          </div>
          <div>
            <p>CHIP IMAGE</p>
            <p>58253242</p>
          </div>
        </div>
      </div>
    </div>
  );
};
