import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, Page} from "./ThemeContext";
import {useContext} from "react";

interface UsePageResult {
  togglePage: () => void;
  page: Page;
}

export function usePage(): UsePageResult {
  const {page, setPage} = useContext(ThemeContext);

  const togglePage = () => {
    const newPage = Page.MAIN;

    setPage(newPage);
  }

  return {
    page,
    togglePage,
  }
}
