import { FeatureParams } from '../../types'
import { capitalize } from '../capitalize'

export const featureInterface = (params: FeatureParams) => {
  const Name = capitalize(params.name)  
  return `
  export interface I${Name} {
  method: () => Promise<${Name}Entity>
}
`
}