import { api } from '../template'
import { createDirs } from './create-dir'

export const createConfig = async (target: string) => {
  const nameDir = `${target}/_config`
  const files = [
    { name: 'api.ts', contend: api }
  ]
  try {
    await createDirs({nameDir, files})
  } catch (error: any) {
    throw new Error(error.message);
  }
}