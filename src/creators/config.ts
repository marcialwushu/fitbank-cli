import { promisify } from 'util';
import * as fs from 'fs'

const mkDir = promisify(fs.mkdir)
const writeFile = promisify(fs.writeFile)

export const makeDir = async (target: string) => {
  try {
    await mkDir(target, {recursive: true})
  } catch (error) {
    throw new Error("Diretório já existe");
  }
}

export const write = async (target: string, text: string) => await writeFile(target, text, 'utf-8')
