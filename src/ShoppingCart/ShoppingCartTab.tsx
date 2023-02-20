import { Button, List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ShoppingCart } from "../types";

interface ShoppingCartTabProps {
  shoppingCart: ShoppingCart;
  totalPrice: number;
  closeShoppingCartTab: () => void;
}

const ShoppingCartTab: React.FC<ShoppingCartTabProps> = ({
  shoppingCart,
  totalPrice,
  closeShoppingCartTab,
}) => (
  <Box
    sx={{
      position: "fixed",
      right: "0",
      height: "100vh",
      zIndex: "999",
      padding: "20px 10px 20px 40px",
      bgcolor: "#D1C2AE",
      color: "#F5F4F0",
      width: "20vw",
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "start",
          alignItems: "start",
          justifyContent: "space-between",
        }}
      >
        {shoppingCart.length !== 0 ? (
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {shoppingCart.map(({ id, name, price }) => (
              <ListItem
                key={id}
                sx={{
                  display: "flex",
                  gap: "15px",
                  backgroundColor: "#A84B1C",
                  color: "#F5F4F0",
                  padding: "25px",
                  borderRadius: "12px",
                }}
              >
                <Box>{name}:</Box>
                <Box>{price}</Box>
              </ListItem>
            ))}
          </List>
        ) : (
          <Box
            sx={{
              color: "#A84B1C",
            }}
          >
            <Typography fontSize="30px">Shopping cart empty</Typography>
          </Box>
        )}
        <Button
          variant="text"
          onClick={closeShoppingCartTab}
          sx={{ color: "#3E2309", fontSize: "25px" }}
        >
          X
        </Button>
      </Box>
      {totalPrice > 0 && (
        <Box
          marginBottom={"50px"}
          sx={{ fontSize: "20px", color: "#2C4F47", fontWeight: "bold" }}
        >
          Total: ${(Math.round(totalPrice * 100) / 100).toFixed(2)}
        </Box>
      )}
    </Box>
  </Box>
);

export default ShoppingCartTab;
