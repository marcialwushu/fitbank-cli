import { FeatureParams } from '../../types'

export const featureTypes = (params: FeatureParams) => {
  return `export const ${params.name.toLocaleUpperCase()}_REQUEST = '${params.name.toLowerCase()}_request'
export const ${params.name.toLocaleUpperCase()}_SUCCESS = '${params.name.toLowerCase() }_success'
export const ${params.name.toLocaleUpperCase()}_FAILURE = '${params.name.toLowerCase() }_failure'`
}