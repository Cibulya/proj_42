import {createContext} from "react";

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light'
}

export enum Page {
  MAIN = 'main',
  TABLE = 'table',
  CHIP = 'chip'
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void
  page?: Page;
  setPage?: (page: Page) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme';
