import { featureInterface } from './template/feature-interface';
import { featureEntity } from './template/feature-entity';
import { createDirs } from '../creators';
import { capitalize } from './capitalize';
import { featureClass } from './template/feature-class';
import { featureSpec } from './template/feature-spec';

export const service = async (target: string) => {
  const raw = target.split('/')
  const name = raw[raw.length - 1]
  const Name = capitalize(name)
  try {
    await createDirs({
      nameDir: `${target}/services`, files: [
        { name: `${Name}.ts`, contend: featureClass({ name }) },
        { name: `${Name}.spec.ts`, contend: featureSpec({ name }) },
      ]
    })
  } catch (error: any) {
    throw new Error(error.message);
  }
}