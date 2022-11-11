export const app = `
import React from 'react'
import * as Styled from './styles'

export const App: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Header>Cabeçalho</Styled.Header>
      <Styled.SideBar>SideBar</Styled.SideBar>
      <Styled.Main>Conteúdo</Styled.Main>
      <Styled.Footer>Footer</Styled.Footer>
    </Styled.Container>
  )
}
`
