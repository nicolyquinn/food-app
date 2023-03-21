// icons
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
// material ui components
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
// styling
import styles from "./Sidebar.module.scss";

const SidebarButtons = [
  {
    id: 1,
    buttonText: "chat",
    buttonIcon: ChatRoundedIcon,
  },
  {
    id: 2,
    buttonText: "wallet",
    buttonIcon: AccountBalanceWalletRoundedIcon,
  },
  {
    id: 3,
    buttonText: "favorites",
    buttonIcon: FavoriteRoundedIcon,
  },
  {
    id: 4,
    buttonText: "list",
    buttonIcon: ArticleRoundedIcon,
  },
  {
    id: 5,
    buttonText: "settings",
    buttonIcon: SettingsRoundedIcon,
  },
];

export const Sidebar = () => {
  return (
    <Box className={styles.body}>
      <div>
        <List>
          <ListItem className={styles.listItem}>
            <ListItemButton className={styles.myIconButton}>
              <ListItemIcon className={styles.listIcon}>
                <HomeRoundedIcon className={styles.homeIcon} />
              </ListItemIcon>
              <Typography className={styles.myIconButtonText}>home</Typography>
            </ListItemButton>
          </ListItem>
        </List>
        <nav>
          <List>
            {SidebarButtons?.map((buttons) => (
              <ListItem key={buttons.id} className={styles.listItem}>
                <ListItemButton>
                  <ListItemIcon className={styles.listIcon}>
                    <buttons.buttonIcon />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
      </div>

      <List>
        <ListItem className={styles.listItem}>
          <ListItemButton>
            <ListItemIcon className={styles.listIcon}>
              <LogoutRoundedIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};
