import { createDirs } from './create-dir'

export const createUtils = async (target: string) => {
  const nameDir = `${target}/_utils`
  try {
    await createDirs({ nameDir })
  } catch (error: any) {
    throw new Error(error.message);
  }
}