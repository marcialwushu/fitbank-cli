import { createDirs } from './create-dir'

export const createComponents = async (target: string) => {
  const nameDir = `${target}/components`
  try {
    await createDirs({ nameDir })
  } catch (error: any) {
    throw new Error(error.message);
  }
}