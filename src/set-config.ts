import { promisify } from 'util';
import * as fs from 'fs'
import {
  babel,
  custom,
  eslintignore,
  eslintrc,
  gitignore,
  huskyrc,
  indexHtml,
  jest,
  lintstaged,
  packageJson,
  pullRequest,
  storyBookMain,
  storyBookPreview,
  tsconfig,
  webpack
} from './config'
import { createDirs } from './creators'
import { write } from './creators/config';

const mkDir = promisify(fs.mkdir)

export const setConfig = async (target: string, template: string) => { 
  const rawTarget = target.split('\\')
  let name = rawTarget[rawTarget.length - 1]
  
  
  const makeDir = async (target: string) => {
    try {
      await mkDir(target)
    } catch (error) {
      throw new Error("Diretório já existe");
    }
  }
  try {
    if (template !== ".") {      
      await makeDir(target)
      name = template
    }
    const files = [
      { name: '.eslintrc', contend: eslintrc },
      { name: '.eslintignore', contend: eslintignore },
      { name: '.gitignore', contend: gitignore },
      { name: '.huskyrc.json', contend: huskyrc },
      { name: '.lintstaged.json', contend: lintstaged },
      { name: 'babel.config.js', contend: babel },
      { name: 'custom.d.ts', contend: custom },
      { name: 'jest.config.js', contend: jest },
      { name: 'package.json', contend: packageJson(name) },
      { name: 'pull_request_template.md', contend: pullRequest },
      { name: 'tsconfig.json', contend: tsconfig },
      { name: 'webpack.config.js', contend: webpack }
    ]
    files.forEach(async (file) => {
      await write(`${target}/${file.name}`, file.contend)
    })
    await createDirs({
      nameDir: `${target}/.storybook`, files: [
        { name: 'main.js', contend: storyBookMain },
        { name: 'preview.js', contend: storyBookPreview },
      ] })
    await createDirs({
      nameDir: `${target}/public`, files: [
        { name: 'index.html', contend: indexHtml(name) }
      ] })
  } catch (error: any) {
    throw new Error(error.message);
  }
}