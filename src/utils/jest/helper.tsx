import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { render, RenderResult } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import theme from 'styles/theme';

export const renderWithTheme = (children: ReactNode): RenderResult =>
  render(
    <ThemeProvider theme={theme}>
      <Router>{children}</Router>
    </ThemeProvider>
  );
