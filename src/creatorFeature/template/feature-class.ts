import { FeatureParams } from '../../types'
import { capitalize } from '../capitalize'

export const featureClass = (params: FeatureParams) => {
  const Name = capitalize(params.name)  
  return `
  export class ${Name} implements I${Name}{
  constructor(
    //injetar dependências
  ) { }

  async method(): Promise<${Name}Entity[]>{}
  }
`
}