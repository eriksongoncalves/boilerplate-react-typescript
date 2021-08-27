import styled, { css, DefaultTheme } from 'styled-components';

import { ButtonProps } from '.';

export type WrapperProps = Pick<ButtonProps, 'size' | 'secondary'>;

const wrapperModifiers = {
  small: () => css`
    height: 3.3rem;
    font-size: 1.6rem;
    min-width: 13.7rem;
  `,
  large: () => css`
    height: 4.4rem;
    font-size: 1.8rem;
    min-width: 13.6rem;
  `,
  secondary: (theme: DefaultTheme) => css`
    background: transparent;
    color: ${theme.colors.black};
  `
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, secondary }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.black};
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    border: 0;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid ${theme.colors.black};
    text-decoration: none;
    padding: 0 2rem;

    ${!!size && wrapperModifiers[size]()};
    ${secondary && wrapperModifiers.secondary(theme)};
  `}
`;
