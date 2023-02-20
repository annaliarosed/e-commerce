import { Box, Pagination } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { ProductInfo } from "../types";

interface PagePaginationProps {
  itemsToPaginate: ProductInfo[];
  itemsPerPage: number;
  pagination: { from: number; to: number };
  setPagination: Dispatch<SetStateAction<{ from: number; to: number }>>;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const PagePagination: React.FC<PagePaginationProps> = ({
  itemsToPaginate,
  itemsPerPage,
  pagination,
  setPagination,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "5px",
        zIndex: "999",
        backgroundColor: "#4E5E41",
        padding: "15px",
        borderRadius: "15px",
      }}
    >
      <Pagination
        size="large"
        defaultPage={1}
        page={currentPage}
        count={Math.ceil(itemsToPaginate.length / itemsPerPage)}
        onChange={(_, page) => {
          const from = (page - 1) * itemsPerPage;
          const to = (page - 1) * itemsPerPage + itemsPerPage;

          setPagination({ ...pagination, from, to });
          setCurrentPage(page);
        }}
        sx={{
          ul: {
            "& .MuiPaginationItem-root": {
              color: "#f2eee9",
              fontSize: "18px",
            },
          },
        }}
      />
    </Box>
  );
};

export default PagePagination;
