export const featureStyle = `
import styled from 'styled-components';

export const Container = styled.div\`
  background-color: \${({ theme }) => theme.colors.primary};
  color: \${({ theme }) => theme.colors.secondary}; 
\`
`