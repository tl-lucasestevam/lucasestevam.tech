import type { AppProps } from "next/app";
import { ThemeProvider } from "~/contexts/theme";
import GlobalStyle from "~/styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
