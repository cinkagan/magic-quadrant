import styled, {css} from 'styled-components';

export const Container = styled.div`
  ${({theme: {colors}}) => css`
    box-sizing: content-box;
    width: 400px;
    height: 400px;
    border: 2px solid ${colors.DARK_GREY};
    position: relative;
  `}
`;

interface InnerAxisProps {
  orientation: 'v' | 'h';
}

export const InnerAxis = styled.div<InnerAxisProps>`
  ${({orientation, theme: {colors}}) => css`
    height: ${orientation === 'v' ? '100%' : '2px'};
    width: ${orientation === 'v' ? '2px' : '100%'};
    background-color: ${colors.LIGHT_GREY};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`;

interface AxisLabelProps {
  axis: 'x' | 'y';
}

export const AxisLabel = styled.div<AxisLabelProps>`
  ${({axis}) => css`
    position: absolute;
    left: 0;
    bottom: 0;
    writing-mode: ${axis === 'x' ? 'unset' : 'vertical-lr'};
    font-family: sans-serif;
    font-size: 13px;
    transform: translate(${axis === 'x' ? '0, 130%' : '-130%, 0'})
      rotate(${axis === 'x' ? '0' : '180deg'});
  `}
`;

interface AreaLabelProps {
  area: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const AreaLabel = styled.div<AreaLabelProps>`
  ${({area, theme: {colors}}) => css`
    font-size: 14px;
    background-color: ${colors.LIGHT_BLUE};
    color: ${colors.WHITE};
    padding: 4px 10px;
    border-radius: 4px;
    margin: 6px 0;
    position: absolute;
    bottom: ${area.includes('bottom') && '0'};
    left: ${area.includes('left') && '25%'};
    right: ${area.includes('right') && '25%'};
    transform: translateX(${area.includes('left') ? '-50%' : '50%'});
  `}
`;
