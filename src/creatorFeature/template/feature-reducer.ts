import { FeatureParams } from '../../types'

export const featureReducers = (params: FeatureParams) => {
  return `
export const ${params.name.toLowerCase() }Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.${params.name.toLowerCase()}_request: {
      const newState = { ...state }
      newState.load = true
      return newState
      }
    case types.${params.name.toLowerCase() }_success: {
      const newState = { ...state }
      return newState
    }
    case types.${params.name.toLowerCase() }_failure: {
      const newState = { ...initialState }
      newState.error = action.payload
      return newState
      }
    default: return state
    }
}`}