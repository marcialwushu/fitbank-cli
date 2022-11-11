import { FeatureParams } from '../../types';
import { capitalize } from '../capitalize';

export const featureSpecApp = (params: FeatureParams) => {
  const Name = capitalize(params.name)
  return `
import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import {faker} from '@faker-js/faker'

import ${Name} from './'


type SutProps = {
  sut: RenderResult;
}

const makeSut = (): SutProps => {
  const sut = render(<${Name} />)

  return { sut }
}

describe('${Name}', () => {
  it('Deve ter uma descrição do teste', () => {
    //arrange
    const { sut } = makeSut()

    //action
    const title = sut.getByRole('title')

    //assertion
    expect(title.textContent).toBe('o que se espera')
  })
})
`}