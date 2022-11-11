import { createDirs } from '../creators';
import { capitalize } from './capitalize';
import { featureClass } from './template/feature-class';
import { featureSpec } from './template/feature-spec';
import { featureTypes } from './template/feature-type';
import { featureActions } from './template/feature-action';
import { featureReducers } from './template/feature-reducer';

export const presentation = async (target: string) => {
  const raw = target.split('/')
  const name = raw[raw.length - 1]
  const Name = capitalize(name)
  try {
    await createDirs({
      nameDir: `${target}/presentation/controllers`, files: [
        { name: `${Name}.types.ts`, contend: featureClass({ name }) },
        { name: `${Name}.types.spec.ts`, contend: featureSpec({ name }) },
      ]
    })
    await createDirs({
      nameDir: `${target}/presentation/redux`
    })
    await createDirs({
      nameDir: `${target}/presentation/redux/types`, files: [
        { name: `${Name}.type.ts`, contend: featureTypes({ name }) },
        { name: `${Name}.type.spec.ts`, contend: featureSpec({ name }) },
      ]
    })
    await createDirs({
      nameDir: `${target}/presentation/redux/actions`, files: [
        { name: `${Name}.action.ts`, contend: featureActions({ name }) },
        { name: `${Name}.action.spec.ts`, contend: featureSpec({ name }) },
      ]
    })
    await createDirs({
      nameDir: `${target}/presentation/redux/reducers`, files: [
        { name: `${Name}.reducer.ts`, contend: featureReducers({ name }) },
        { name: `${Name}.reducer.spec.ts`, contend: featureSpec({ name }) },
      ]
    })
    await createDirs({
      nameDir: `${target}/presentation/redux/saga`
    })
  } catch (error: any) {
    throw new Error(error.message);
  }
}