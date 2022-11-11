import { createDirs } from '../creators'
import { featureIndexApp } from './template/feature-index-app'
import { featureSpecApp } from './template/feature-spec-app'
import { featureStyle } from './template/feature-styles'
export const UI = async (target: string) => {
  const raw = target.split('/')
  const name = raw[raw.length - 1]
  try {
    await createDirs({
      nameDir: `${target}/UI/components/${ name.toLocaleLowerCase() }`, files: [
        { name: 'index.tsx', contend: featureIndexApp({ name }) },
        { name: 'styles.ts', contend: featureStyle },
        { name: `${name.toLocaleLowerCase()}.spec.tsx`, contend: featureSpecApp({ name }) },
      ]
    })
    await createDirs({
      nameDir: `${target}/UI/pages/${ name.toLocaleLowerCase() }`, files: [
        { name: 'index.tsx', contend: featureIndexApp({ name }) },
        { name: 'styles.ts', contend: featureStyle },
        { name: `${name.toLocaleLowerCase()}.spec.tsx`, contend: featureSpecApp({ name }) },
      ]
    })
  } catch (error: any) {
    throw new Error(error.message);
  }
}