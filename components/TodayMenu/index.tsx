import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import styles from "./TodayMenu.module.scss";

const category = [
  {
    icon: "🍕",
    name: "Pizza",
  },
  {
    icon: "🍔",
    name: "Burger",
  },
  {
    icon: "🌭",
    name: "Hotdog",
  },
  {
    icon: "🌮",
    name: "Taco",
  },
  {
    icon: "🍟",
    name: "Snack",
  },
  {
    icon: "🥤",
    name: "Drink",
  },
];

export const TodayMenu = () => {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <h1>Today Menu 😋</h1>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Search by food name
          </InputLabel>
          <OutlinedInput
            type="text"
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <SearchRoundedIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Search by food name"
          />
        </FormControl>
      </div>
      <div>
        <div className={styles.categoryHeader}>
          <h2>Menu Category</h2>
          <p>
            View All{" "}
            <ArrowForwardIosRoundedIcon className={styles.viewAllArrow} />
          </p>
        </div>
        <div className={styles.categoryMap}>
          {category?.map((item) => (
            <div className={styles.categoryItem}>
              <p className={styles.categoryIcon}>{item.icon}</p>
              <p>{item.name}</p>
              <ArrowForwardIosRoundedIcon className={styles.categoryArrow} />
            </div>
          ))}
        </div>
      </div>
      <a
        target="_blank"
        href="https://dribbble.com/shots/15082603-Food-Delivery-Dashboard/attachments/6812686?mode=media"
      >
        This is the design used as a base
      </a>
    </div>
  );
};
