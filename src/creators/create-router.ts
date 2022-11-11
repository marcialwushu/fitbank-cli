import { protect, router } from '../template'
import { createDirs } from './create-dir'

export const createRouter = async (target: string) => {
  const nameDir = `${target}/_routers`
  const files = [
    { name: 'router.tsx', contend: router },
    { name: 'protectedRouter.tsx', contend: protect },
  ]
  try {
    await createDirs({nameDir, files})
  } catch (error: any) {
    throw new Error(error.message);
  }
}