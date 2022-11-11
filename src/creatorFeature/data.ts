import { featureInterface } from './template/feature-interface';
import { featureEntity } from './template/feature-entity';
import { createDirs } from '../creators';
import { capitalize } from './capitalize';
import { featureClass } from './template/feature-class';
import { featureSpec } from './template/feature-spec';

export const data = async (target: string) => {
  const raw = target.split('/')
  const name = raw[raw.length - 1]
  const Name = capitalize(name)
  try {
    await createDirs({
      nameDir: `${target}/data/repositories`, files: [
        { name: `${Name}.ts`, contend: featureClass({name}) },
        { name: `${Name}.spec.ts`, contend: featureSpec({name}) },
      ]
    })
    await createDirs({
      nameDir: `${target}/data/models`, files: [
        { name: `${Name}.model.ts`, contend: featureClass({name}) },
        { name: `${Name}.model.spec.ts`, contend: featureSpec({name}) },
      ]
    })
    await createDirs({
      nameDir: `${target}/data/datasources`, files: [
        { name: `I${Name}.ts`, contend: featureInterface({name}) }
      ]
    })
  } catch (error: any) {
    throw new Error(error.message);
  }
}