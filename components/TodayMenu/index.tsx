import { useCart } from "@/context/CartContext";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Image from "next/image";
import CategoryTabs from "./CategoryTabs";
import styles from "./TodayMenu.module.scss";

const category = [
  {
    id: 1,
    icon: "🍕",
    name: "Pizza",
  },
  {
    id: 2,
    icon: "🍔",
    name: "Burger",
  },
  {
    id: 3,
    icon: "🌭",
    name: "Hotdog",
  },
  {
    id: 4,
    icon: "🌮",
    name: "Taco",
  },
  {
    id: 5,
    icon: "🍟",
    name: "Snack",
  },
  {
    id: 6,
    icon: "🥤",
    name: "Drink",
  },
];

const pizzas = [
  {
    id: 1,
    pizzaImage: "/mushroom-pizza.png",
    pizzaName: "Mushroom Pizza",
    rating: "⭐⭐⭐⭐⭐",
    price: "7.49",
  },
  {
    id: 2,
    pizzaImage: "/italian-pizza.webp",
    pizzaName: "Italian Pizza",
    rating: "⭐⭐⭐⭐",
    price: "6.59",
  },
  {
    id: 3,
    pizzaImage: "/sausage-pizza.png",
    pizzaName: "Sausage Pizza",
    rating: "⭐⭐⭐⭐⭐",
    price: "5.49",
  },
];

export const TodayMenu = () => {
  const { cart, addToCart } = useCart();
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
        <Image
          width={900}
          height={220}
          className={styles.mainBanner}
          alt="main-banner"
          src="/main-banner.png"
          priority
        />
      </div>
      <div>
        <div className={styles.categoryHeader}>
          <h2>Menu Category</h2>
          <div className={styles.viewAll}>
            <p>View All</p>
            <ArrowForwardIosRoundedIcon className={styles.viewAllArrow} />
          </div>
        </div>
        <CategoryTabs onAddToCart={addToCart} />
      </div>
      <div className={styles.footer}>
        <a
          target="_blank"
          href="https://dribbble.com/shots/15082603-Food-Delivery-Dashboard/attachments/6812686?mode=media"
        >
          This project was inspired by this design from Dribbble!!!
        </a>
      </div>
    </div>
  );
};
