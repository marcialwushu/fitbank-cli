import { featureInterface } from './template/feature-interface';
import { featureEntity } from './template/feature-entity';
import { createDirs } from '../creators';
import { capitalize } from './capitalize';

export const domain = async (target: string) => {
  const raw = target.split('/')
  const name = raw[raw.length - 1]
  const Name = capitalize(name)
  try {
    await createDirs({
      nameDir: `${target}/domain/entities`, files: [
        { name: `${Name}Entity.ts`, contend: featureEntity({name}) }
      ]
    })
    await createDirs({
      nameDir: `${target}/domain/usecases`, files: [
        { name: `I${Name}.ts`, contend: featureInterface({name}) }
      ]
    })
  } catch (error: any) {
    throw new Error(error.message);
  }
}