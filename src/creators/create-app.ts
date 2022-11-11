import { app, appStory, appStyle } from '../template'
import { createDirs } from './create-dir'

export const createApp = async (target: string) => {
  const nameDir = `${target}/app`
  const files = [
    { name: 'index.tsx', contend: app },
    { name: 'styles.ts', contend: appStyle },
    { name: 'app.stories.tsx', contend: appStory },
  ]
  try {
    await createDirs({nameDir, files})
  } catch (error: any) {
    throw new Error(error.message);
  }
}