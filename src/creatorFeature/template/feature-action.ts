import { FeatureParams } from '../../types'
import { capitalize } from '../capitalize'

export const featureActions = (params: FeatureParams) => {
  const Name = capitalize(params.name)
  return `export const ${params.name.toLowerCase() }Request = () => ({
type: types.${params.name.toLowerCase()}_request,
payload
})

export const ${params.name.toLowerCase() }Success = (payload: ${Name}Entity) => ({
type: types.${params.name.toLowerCase() }_success,
payload
})

export const ${params.name.toLowerCase() }Failure = (payload: string) => ({
type: types.${params.name.toLowerCase() }_failure,
payload
})`}