import { extendTheme, theme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
export default extendTheme({
  colors: {
    primary: theme.colors.orange,
    secondary: theme.colors.teal,
  },
  styles: {
    global: (props) => ({
      body: {
        backgroundColor: mode("white", "gray.800")(props),
      },
    }),
  },
});
