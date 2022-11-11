import { data } from './data'
import { domain } from './domain'
import { presentation } from './presentation'
import { service } from './service'
import { UI } from './UI'

export const createFeature = async (target: string, name: string) => {
  const dir = `${target}/src/feature/${name}`
  await domain(dir)
  await data(dir)
  await service(dir)
  await presentation(dir)
  await UI(dir)
}