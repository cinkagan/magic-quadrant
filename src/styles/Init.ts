import styled, {createGlobalStyle} from 'styled-components';

const InitStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline:none !important;
  }

  body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Container = styled.main`
  display: flex;
  align-items: flex-start;
`;

export default InitStyle;
