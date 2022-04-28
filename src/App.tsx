import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Chart, Table} from './components';
import {AppProvider} from './providers/App';
import {theme} from './themes';
import InitStyle, {Container} from './styles/Init';

function App() {
  return (
    <Container>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <InitStyle />
          <Chart />
          <Table />
        </ThemeProvider>
      </AppProvider>
    </Container>
  );
}

export default App;
