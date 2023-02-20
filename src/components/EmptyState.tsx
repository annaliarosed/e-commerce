import React from "react";
import { Box } from "@mui/material";

const EmptyState = () => (
  <Box
    component="img"
    src="https://www.barnesandnoble.com/blog/wp-content/uploads/2019/11/Nothing-to-See-Here-Crop.jpg"
    alt="empty state, no products matching these filters"
  />
);

export default EmptyState;
