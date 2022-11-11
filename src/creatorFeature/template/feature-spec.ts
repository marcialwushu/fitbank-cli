import { FeatureParams } from '../../types';
import { capitalize } from '../capitalize';

export const featureSpec = (params: FeatureParams) => {
  const Name = capitalize(params.name)
  return `
import {faker} from '@faker-js/faker'

import ${Name} from './'


type SutProps = {
  sut: ${Name};
}

const makeSut = (): SutProps => {
  const sut = new ${Name}()

  return { sut }
}

describe('${Name}', () => {
  it('Deve ter uma descrição do teste', () => {
    //arrange
    const { sut } = makeSut()

    //action
    const resposta = sut

    //assertion
    expect(resposta ).toEqual(o que se espera)
  })
})`}