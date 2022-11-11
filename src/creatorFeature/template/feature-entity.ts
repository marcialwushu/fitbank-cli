import { FeatureParams } from '../../types'
import { capitalize } from '../capitalize'

export const featureEntity = (params: FeatureParams) => {
  const Name = capitalize(params.name) 
  return `
  export class ${Name}Entity {
  constructor(readonly id: number, readonly name: string){};
  }
`
}