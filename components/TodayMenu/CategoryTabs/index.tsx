// Importe os tipos necessários do NextJS e do React
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../TodayMenu.module.scss";

// Defina o tipo de dados para o produto
type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
  rating: string;
  price: string;
};

const category = [
  {
    id: 1,
    icon: "🍕",
    name: "Pizza",
  },
  {
    id: 2,
    icon: "🍔",
    name: "Burguer",
  },
  {
    id: 3,
    icon: "🌭",
    name: "Hotdog",
  },
  {
    id: 4,
    icon: "🌮",
    name: "Tacos",
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

// Defina a página com a função para exibir os produtos
const CategoryTabs: NextPage = () => {
  // Defina um estado para a categoria selecionada
  const [selectedCategory, setSelectedCategory] = useState("Pizza");

  // Defina uma variável para armazenar os produtos filtrados
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Defina uma função para filtrar os produtos pela categoria selecionada
  const getProductsByCategory = async (
    category: string
  ): Promise<Product[]> => {
    const res = await fetch(`/api/product`);
    const products: Product[] = await res.json();
    return products.filter((product: Product) => product.category === category);
  };

  // Atualize a lista de produtos filtrados quando a categoria selecionada mudar
  useEffect(() => {
    getProductsByCategory(selectedCategory).then((products) => {
      setFilteredProducts(products);
      debugger;
    });
  }, [selectedCategory]);

  return (
    <div>
      <div className={styles.categoryMap}>
        {category?.map((item) => (
          <div
            key={item.id}
            className={
              selectedCategory === item.name
                ? styles.selectedCategory
                : styles.categoryItem
            }
            onClick={() => setSelectedCategory(`${item.name}`)}
          >
            <p className={styles.categoryIcon}>{item.icon}</p>
            <p>{item.name}</p>
            <ArrowForwardIosRoundedIcon className={styles.categoryArrow} />
          </div>
        ))}
      </div>
      {selectedCategory && (
        <div>
          <ul className={styles.pizzaWrapper}>
            {filteredProducts.map((product) => (
              <div key={product.id} className={styles.pizzaItem}>
                <Image
                  width={150}
                  height={150}
                  alt="pizza"
                  src={product.image}
                  className={styles.pizzaImage}
                  priority
                />
                <p className={styles.pizzaName}>{product.name}</p>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p style={{ marginTop: "10px" }}>{product.rating}</p>
                    <div style={{ display: "flex", alignItems: "end" }}>
                      <p className={styles.pizzaCurrency}>$ </p>
                      <p className={styles.pizzaName}>{product.price}</p>
                    </div>
                  </div>
                  <AddRoundedIcon className={styles.plusIcon} />
                </div>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryTabs;
