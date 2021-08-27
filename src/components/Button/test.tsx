import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/jest/helper';

import Button from '.';

describe('<Button />', () => {
  it('should render by default as primary and large size', () => {
    renderWithTheme(<Button>Novo cliente</Button>);

    const button = screen.getByRole('button', { name: /novo cliente/i });

    expect(button).toHaveStyle({
      height: '4.4rem',
      'font-size': '1.8rem',
      'min-width': '13.6rem',
      background: '#000000',
      color: '#ffffff'
    });
  });

  it('should render as secondary', () => {
    renderWithTheme(<Button secondary>Novo cliente</Button>);

    const button = screen.getByRole('button', { name: /novo cliente/i });

    expect(button).toHaveStyle({
      background: 'transparent',
      color: '#000000'
    });
  });

  it('should render as small size', () => {
    renderWithTheme(<Button size="small">Novo cliente</Button>);

    const button = screen.getByRole('button', { name: /novo cliente/i });

    expect(button).toHaveStyle({
      height: '3.3rem',
      'font-size': '1.6rem',
      'min-width': '13.7rem'
    });
  });
});
