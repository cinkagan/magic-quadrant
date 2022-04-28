import styled, {css} from 'styled-components';
import {ButtonProps} from '.';

const Button = styled.button<ButtonProps>`
  ${({fluid, theme: {colors}}) => css`
    border-radius: 3px;
    background-color: ${colors.LIGHT_GREY};
    border: 1px solid ${colors.LIGHT_BLUE};
    padding: 5px 10px;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    width: ${fluid && '100%'};
    transition: all 0.3s ease;
    :hover {
      background-color: ${colors.DARK_GREY};
      color: ${colors.WHITE};
    }
  `}
`;

export default Button;
