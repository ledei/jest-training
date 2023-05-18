import { createContext } from "react";
import { useContext } from "react";

const ThemeDark = "theme-dark";
const ThemeLight = "theme-light";

export const ThemeContext = createContext({
  value: ThemeDark,
  toggle: () => {},
});

export function ThemeProvider({ children }) {
  const theme = useContext(ThemeContext);

  theme.toggle = (setIsTheme) => {
    if (theme.value === ThemeDark) {
      theme.value = ThemeLight;
    } else {
      theme.value = ThemeDark;
    }

    setIsTheme(theme.value);
  };

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}
