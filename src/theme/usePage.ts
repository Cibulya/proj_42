import { useContext } from 'react';
import { PageContext } from 'theme/PageContext';

interface UsePageResult {
  togglePage: (link: string) => void;
  page: string;
}

export function usePage(): UsePageResult {
  const { page, setPage } = useContext(PageContext);

  const togglePage = (link: string) => {
    const newPage = link;

    setPage(newPage);
  };

  return {
    page,
    togglePage,
  };
}
