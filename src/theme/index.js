const colors = {
    white: "#fff",
    grays: {
      100: "#fff9f9",
      200: "#e6e6e6",
      300: "#999999",
      400: "#757575",
      500: "#242424",
      600: "#343434",
      700: "#151515",
      800: "#040404",
      900: "#111111"
    },
    blues: {
      300: "#6CC7F6",
      500: "#3793E0",
      600: "#0971f1"
    },
    reds: {
      300: "#FF453A",
      500: "#E1270E"
    }
  };
  
  const theme = {
    colors,
    space: [0, 4, 8, 12, 16, 20, 24, 28, 32],
    fontSizes: [
      0,
      9, 
      11,
      13,
      16
    ],
    fontWeights: {
      thin: 100,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },
  
    speeds: [0, "75ms", "100ms", "150ms", "200ms", "300ms", "500ms"],
  
    shadows: {
      active: `inset 0px -2px 0px ${colors.blues[300]}`,
      underline: `inset 0px -2px 0px ${colors.grays[100] + "1a"}`,
      fadeunder: `inset 0px 8px 8px 0px ${colors.grays[700] + "cc"}`
    },
  
    radii: {
      small: 2,
      medium: 4,
      large: 16,
      round: "50%"
    }
  };
  
  export default theme;
  