import styled, {css} from 'styled-components';

interface TableCellProps {
  hasButton?: boolean;
}

export const TableCell = styled.td<TableCellProps>`
  ${({hasButton, theme: {colors}}) => css`
    border: ${!hasButton && '1px solid ' + colors.LIGHT_BLUE};
    padding: ${!hasButton && '0 10px'};
    font-family: sans-serif;
    font-size: 14px;
    border-radius: 3px;
  `}
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  font-size: inherit;
  height: 18px;
`;
