import { Box } from "@mui/material";
import React from "react";
import "./App.css";
import HomePage from "./HomePage/HomePage";

function App() {
  return (
    <Box>
      <Box maxWidth="1200px" margin="0 auto">
        <HomePage />
      </Box>
    </Box>
  );
}

export default App;
