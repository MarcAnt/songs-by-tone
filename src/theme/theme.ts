import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    "html, body": {
      color: "#303030",
      bg: "#fffcf2",
      overflowX: "hidden",
      fontFamily: "Rubik, sans-serif",
    },
  },
};

export const theme = extendTheme({ styles });
