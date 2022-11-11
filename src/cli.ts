import arg from 'arg'
import { create } from './create'
import { OptionsType } from './types'

const parseArgumentsIntoOptions = (rawArgs: string[]): OptionsType => {

  const args = arg(
    {
      '--create': Boolean,
      '-C': '--create'
    },
    { argv: rawArgs.slice(2) })
  return {
    name: args._[0],
    create: args['--create'] || false
  }
}

export const cli = async (args: string[]) => {
  let options = parseArgumentsIntoOptions(args)
  if (create) {
    return await create(options)
  }
}