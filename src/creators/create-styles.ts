import { style_d } from '../template/styled-d';
import { global, globalIndex, theme } from '../template'
import { createDirs } from './create-dir'

export const createStyles = async (target: string) => {
  const nameDir = `${target}/_styles`
  const files = [
    { name: 'global-styles.ts', contend: global('Roboto') },
    { name: 'styled.d.ts', contend: style_d },
    { name: 'theme.ts', contend: theme },
    { name: 'index.ts', contend: globalIndex },
  ]
  try {
    await createDirs({ nameDir, files })
  } catch (error: any) {
    throw new Error(error.message);
  }
}