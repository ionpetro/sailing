import { createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "indigo",
  colors: {
    indigo: [
      "#F0F3F9", // 0
      "#E1E7F3", // 1
      "#C3CFE7", // 2
      "#A4B7DB", // 3
      "#7E94CB", // 4
      "#4B75DD", // 5
      "#4A65A7", // 6
      "#3D5286", // 7
      "#2F3F65", // 8
      "#212C44", // 9
    ],
  },
  fontFamily: "var(--font-inter)",
  headings: {
    fontFamily: "var(--font-inter)",
    fontWeight: "800",
  },
  components: {
    Button: {
      defaultProps: {
        radius: "xl",
      },
      styles: {
        root: {
          fontWeight: 500,
          fontSize: "0.875rem",
          lineHeight: 1.5715,
        },
      },
    },
    Input: {
      defaultProps: {
        radius: "md",
      },
      styles: {
        input: {
          borderColor: "#D1D5DB",
          "&:focus": {
            borderColor: "#4B75DD",
          },
        },
      },
    },
  },
});
