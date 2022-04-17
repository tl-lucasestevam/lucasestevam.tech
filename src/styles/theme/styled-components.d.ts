import "styled-components";
import theme from "~/styles/theme";

type Theme = typeof theme.dark;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
