import { extendTheme, theme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
export default extendTheme({
  colors: {
    primary: theme.colors.orange,
    secondary: "rgb(71,198,170)"
  },
  styles: {
    global: (props) => ({
      body: {
        backgroundColor: mode("white", "gray.800")(props),
      },
    }),
  },
});
