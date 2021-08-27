import { ButtonHTMLAttributes, ReactNode } from 'react';

import * as S from './styles';

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  children: string | ReactNode;
  size?: 'small' | 'large';
  secondary?: boolean;
} & ButtonTypes;

function Button({
  children,
  size = 'large',
  secondary = false,
  ...props
}: ButtonProps) {
  return (
    <S.Wrapper {...props} size={size} secondary={secondary}>
      {children}
    </S.Wrapper>
  );
}

export default Button;
