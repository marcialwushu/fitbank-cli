export const appStyle = `import styled from 'styled-components';

export const Container = styled.div\`
  display: grid;
  grid-template-columns: \${({theme}) => theme.sizes['320px']} 1fr;
  grid-template-rows: \${({ theme }) => theme.sizes['64px']} 1fr \${({ theme }) => theme.sizes['64px']};

  height: 100vh;

\`

export const Header = styled.div\`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;

  /* exemplo para ser visualizado e pode apagar quando for implementar */
  background-color: red;
  text-align: center;

\`
export const SideBar = styled.div\`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;

  /* exemplo para ser visualizado e pode apagar quando for implementar */
  text-align: center;
  background-color: blue;
\`

export const Main = styled.div\`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 0;
  grid-row-end: 3;

/* exemplo para ser visualizado e pode apagar quando for implementar */
  text-align: center;
  background-color: yellow;
\`
export const Footer = styled.div\`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;

  /* exemplo para ser visualizado e pode apagar quando for implementar */
  text-align: center;
  background-color: green;
\`
`