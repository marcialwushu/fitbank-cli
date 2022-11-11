import { FeatureParams } from '../../types';

export const featureIndexApp = (params: FeatureParams) => `
import React from 'react'
import * as Styled from './styles'

export const ${params.name}: React.FC = () => {
  return (
    <Styled.Container>
      ${params.name}
    </Styled.Container>
  )
}
`
