import path from 'path'
import Listr from 'listr'
import execa from 'execa'
import { projectInstall } from 'pkg-install'
import { OptionsType } from './types'
import { setConfig } from './set-config'
import { setSrc } from './set-src'
import { createFeature } from './creatorFeature'

export const create = async (options: OptionsType) => {
  if (!options.name) {
    console.error("Nome do projeto é obrigatório");
    process.exit(1)
  }
  const target = path.resolve(process.cwd(), `${options.name}`)
  console.log(path.resolve(process.cwd(), `${options.name}`));
  
  const task = new Listr([
    {
      title: 'Criar arquivos de configurações',
      task: async () => await setConfig(target, options.name)
    },
    {
      title: 'Instalar dependências',
      task: async () => await execa('yarn', ['install'], {
        cwd: path.resolve(process.cwd(), `${options.name}`)
      })
    },
    {
      title: 'Atualizando dependências',
      task: async () => await execa('yarn', ['upgrade', '-L'], {
        cwd: path.resolve(process.cwd(), `${options.name}`)
      })
    },
    {
      title: 'Criar estrutura de pastas',
      task: async () => await setSrc(target)
    },
    {
      title: 'Criar feature exemplo',
      task: async () => await createFeature(target, 'example')
    },
  ])

  try {
    await task.run()
    console.log('Projeto concluído')
  } catch (error: any) {
    console.error(error.message);
    
  }
}