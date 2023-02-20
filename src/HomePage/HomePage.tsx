import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

import products from "../data/products.json";

import { ProductInfo, ShoppingCart } from "../types";

import ShoppingCartTab from "../ShoppingCart/ShoppingCartTab";
import PagePagination from "../components/PagePagination";
import ProductCard from "./ProductCard/ProductCard";

import EmptyState from "../components/EmptyState";
import ErrorState from "../components/ErrorState";
import LoadingState from "../components/LoadingState";

const ITEMS_RENDERED_ON_EACH_PAGE = 40;

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [flippedCardId, setFlippedCardId] = useState("");
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>([]);
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);
  const [categories, setCategories] = useState<string[]>(["All products"]);
  const [selectedCategory, setSelectedCategory] = useState("All products");
  const [productsToDisplay, setProductsToDisplay] = useState<ProductInfo[]>([]);
  const [filteredProductsByCategory, setFilteredProductsByCategory] = useState<
    ProductInfo[]
  >([]);
  const [pagination, setPagination] = useState({
    from: 0,
    to: ITEMS_RENDERED_ON_EACH_PAGE,
  });

  useEffect(() => {
    const filterData = async () => {
      try {
        await setFilteredProductsByCategory(
          selectedCategory !== "All products"
            ? products.filter(({ category }) => category === selectedCategory)
            : products
        );

        const slicedProducts = await filteredProductsByCategory.slice(
          pagination.from,
          pagination.to
        );

        setProductsToDisplay(slicedProducts);
        setIsLoading(false);
      } catch (error) {
        return <ErrorState />;
      }
    };

    filterData();
  }, [pagination, selectedCategory, filteredProductsByCategory]);

  useEffect(() => {
    if (selectedCategory !== "All products") {
      setCurrentPage(1);
      setPagination({ from: 0, to: ITEMS_RENDERED_ON_EACH_PAGE });
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (shoppingCart.length > 0) {
      shoppingCart.forEach(({ price }) => {
        const formattedNumber = Number(price.replace("$", ""));
        setTotalPrice(totalPrice + formattedNumber);
      });
    }
  }, [shoppingCart]); // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoading) {
    return <LoadingState />;
  }

  const filteredProductsByName = productsToDisplay.filter(({ name }) =>
    name.toLowerCase().includes(searchTerm)
  );

  products.forEach(({ category }) => {
    if (categories.includes(category)) {
      return;
    }
    const newCategories = categories.concat([category]);

    setCategories(newCategories);
  });

  return (
    <>
      <Button
        variant="contained"
        sx={{
          position: "fixed",
          top: "25px",
          right: "25px",
          zIndex: "999",
          backgroundColor: "#4E5E41",
          "&:hover": {
            backgroundColor: "#939D8D",
          },
        }}
        onClick={() => {
          setIsShoppingCartOpen(true);
        }}
      >
        Cart ({shoppingCart.length} item{shoppingCart.length !== 1 && "s"})
      </Button>

      {isShoppingCartOpen && (
        <ShoppingCartTab
          shoppingCart={shoppingCart}
          totalPrice={totalPrice}
          closeShoppingCartTab={() => setIsShoppingCartOpen(false)}
        />
      )}

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding="40px"
      >
        <Box
          display="flex"
          paddingTop="100px"
          gap="40px"
          width="100%"
          justifyContent="space-between"
          marginBottom="10px"
        >
          <TextField
            label="Search"
            variant="outlined"
            onChange={({ target }) => setSearchTerm(target.value)}
          />
          <Typography sx={{ fontStyle: "italic", alignSelf: "end" }}>
            {filteredProductsByName.length} items
          </Typography>
          <Select
            label="Categories"
            defaultValue="All categories"
            value={selectedCategory}
            onChange={(e: SelectChangeEvent) =>
              setSelectedCategory(e.target.value)
            }
            sx={{
              color: "#2A4C44",
            }}
          >
            {categories.map((category, idx) => (
              <MenuItem key={`${category}-${idx}`} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </Box>
        {filteredProductsByName.length > 0 ? (
          <Box
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={3}
            sx={{
              width: "-webkit-fill-available",
              margin: "0 -20px",
            }}
          >
            {filteredProductsByName.map((product) =>
              flippedCardId === product.id ? (
                <Box
                  bgcolor="#2C4F47"
                  color="#f2eee9"
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "40px",
                    lineHeight: "30px",
                    fontSize: "20px",
                    width: "252px",
                    height: "400px",
                    justifySelf: "center",
                  }}
                  key={product.id}
                >
                  <Typography>{product.description}</Typography>

                  <Tooltip
                    title={
                      !shoppingCart
                        .map((cartItem) => cartItem.id)
                        .includes(product.id)
                        ? "add to cart"
                        : "item in cart"
                    }
                  >
                    <span>
                      <Button
                        sx={{
                          fontSize: "30px",
                          color: "#f2eee9",

                          "&:hover": {
                            backgroundColor: "#56726B",
                          },
                          "&:disabled": {
                            color: "#56726B",
                          },
                        }}
                        disabled={shoppingCart
                          .map((cartItem) => cartItem.id)
                          .includes(product.id)}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (
                            !shoppingCart
                              .map((cartItem) => cartItem.id)
                              .includes(product.id)
                          ) {
                            const { id, price, name } = product;

                            const newItem = {
                              id,
                              price,
                              name,
                            };

                            setShoppingCart(shoppingCart.concat([newItem]));
                            return;
                          }
                        }}
                      >
                        +
                      </Button>
                    </span>
                  </Tooltip>
                </Box>
              ) : (
                <Button
                  key={product.id}
                  onClick={() => {
                    setFlippedCardId(product.id);
                  }}
                  onBlur={() => setFlippedCardId("")}
                  sx={{
                    justifySelf: "center",
                    "&:hover": {
                      backgroundColor: "rgba(168,75,28, 0.1)",
                    },
                  }}
                >
                  <ProductCard
                    product={product}
                    shoppingCart={shoppingCart}
                    setShoppingCart={setShoppingCart}
                  />
                </Button>
              )
            )}
          </Box>
        ) : (
          <EmptyState />
        )}
        <PagePagination
          itemsToPaginate={filteredProductsByCategory}
          itemsPerPage={ITEMS_RENDERED_ON_EACH_PAGE}
          pagination={pagination}
          setPagination={setPagination}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Box>
    </>
  );
};

export default HomePage;
