import React, { FC, useMemo, useState } from 'react';
import { PageContext } from './PageContext';

const defaultPage = window.location.pathname === '/' ? 'main' : (window.location.pathname.slice(1) as string);

const PageProvider: FC = ({ children }) => {
  const [page, setPage] = useState<string>(defaultPage);

  const defaultProps = useMemo(
    () => ({
      page: page,
      setPage: setPage,
    }),
    [page]
  );

  return <PageContext.Provider value={defaultProps}>{children}</PageContext.Provider>;
};

export default PageProvider;
