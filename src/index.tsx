import { render } from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';

import i18n from 'i18n/i18n';
import { I18nextProvider } from 'react-i18next';
import PageProvider from 'theme/PageProvider';

render(
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <PageProvider>
          <App />
        </PageProvider>
      </ThemeProvider>
    </I18nextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
