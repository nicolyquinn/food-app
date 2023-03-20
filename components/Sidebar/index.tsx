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
  ListItemText,
} from "@mui/material";
// styling
import styles from "./Sidebar.module.scss";

const SidebarButtons = [
  {
    buttonText: "chat",
    buttonIcon: ChatRoundedIcon,
  },
  {
    buttonText: "wallet",
    buttonIcon: AccountBalanceWalletRoundedIcon,
  },
  {
    buttonText: "favorites",
    buttonIcon: FavoriteRoundedIcon,
  },
  {
    buttonText: "list",
    buttonIcon: ArticleRoundedIcon,
  },
  {
    buttonText: "settings",
    buttonIcon: SettingsRoundedIcon,
  },
];

export const Sidebar = () => {
  return (
    <Box className={styles.body}>
      <div>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <HomeRoundedIcon className={styles.homeIcon} />
              </ListItemIcon>
              <ListItemText primary="home" />
            </ListItemButton>
          </ListItem>
        </List>
        <nav>
          <List>
            {SidebarButtons?.map((buttons) => (
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <buttons.buttonIcon />
                  </ListItemIcon>
                  <ListItemText primary={buttons.buttonText} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
      </div>

      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <LogoutRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};
