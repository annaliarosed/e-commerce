import { Box, Typography, Button, Tooltip } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { ProductInfo, ShoppingCart } from "../../types";

interface ProductCardProps {
  product: ProductInfo;
  shoppingCart: ShoppingCart;
  setShoppingCart: Dispatch<SetStateAction<ShoppingCart>>;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product: { id, name, price, category, image },
  shoppingCart,
  setShoppingCart,
}) => (
  <Box
    key={id}
    display="flex"
    flexDirection="column"
    padding="15px"
    color="#2A4C44"
    border="1px solid #2A4C44"
    width="fit-content"
    height="fit-content"
    position="relative"
  >
    <Typography
      sx={{
        fontSize: "20px",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      {name}
    </Typography>
    <Typography
      sx={{
        textAlign: "center",
        marginBottom: "10px",
      }}
    >
      {price}
    </Typography>
    <Box
      sx={{
        width: "300px",
        height: "300px",
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        zIndex: "1",
      }}
    />
    <Typography
      sx={{
        fontSize: "13px",
        fontStyle: "italic",
        alignSelf: "self-start",
        textTransform: "capitalize",
      }}
    >
      category: {category}
    </Typography>

    <Box
      sx={{
        width: "150px",
        height: "150px",
        alignSelf: "center",
        position: "absolute",
        top: "140px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography> No image available</Typography>
    </Box>
    <Tooltip
      title={
        !shoppingCart.map((cartItem) => cartItem.id).includes(id)
          ? "add to cart"
          : "item in cart"
      }
      TransitionProps={{ timeout: 100 }}
    >
      <Box sx={{ alignSelf: "center" }}>
        <Button
          sx={{
            fontSize: "30px",
            color: "#4E5E41",

            "&:hover": {
              backgroundColor: "rgba(168,75,28, 0.2)",
            },
          }}
          disabled={shoppingCart.map((cartItem) => cartItem.id).includes(id)}
          onClick={(e) => {
            e.stopPropagation();
            if (!shoppingCart.map((cartItem) => cartItem.id).includes(id)) {
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
      </Box>
    </Tooltip>
  </Box>
);

export default ProductCard;
