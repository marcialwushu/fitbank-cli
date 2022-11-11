import * as config from './config'

type File = {
  name: string,
  contend: string,
}

type Params = {
  nameDir: string,
  files?: File[]
}

export const createDirs = async (params: Params) => {
  try {
    if (!params.nameDir) {
      throw new Error("Nome do diretório é obrigatório");
    }
    
    await config.makeDir(params.nameDir)

    if (!params.files) {
      await config.write(`${params.nameDir}/.gitKeep`, '')
      return
    }
    params.files.forEach(async (file) => {
      await config.write(`${params.nameDir}/${file.name}`, file.contend)
    })
  } catch (error: any) {
    console.log(error);    
    throw new Error(error.message);
  }
}