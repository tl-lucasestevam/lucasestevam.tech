import { createContext, FC, ReactNode } from "react";
import { ThemeProvider as StyledComponentsProvider } from "styled-components";
import usePersistedState from "~/hooks/usePersistedState";
import { ThemeVariation } from "~/interfaces/theme";
import theme from "~/styles/theme";

interface ThemeContextData {
  changeTheme: (themeName: ThemeVariation) => void;
  themeVariation: string;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData);

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [themeVariation, setThemeVariation] = usePersistedState<ThemeVariation>(
    "@lucasestevam:theme",
    "dark"
  );

  const changeTheme = (themeName: ThemeVariation) => {
    setThemeVariation(themeName);
  };

  return (
    <ThemeContext.Provider value={{ changeTheme, themeVariation }}>
      <StyledComponentsProvider theme={theme[themeVariation]}>
        {children}
      </StyledComponentsProvider>
    </ThemeContext.Provider>
  );
};
