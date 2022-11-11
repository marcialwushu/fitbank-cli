import * as creators from './creators';

export const setSrc = async (target: string) => {
  const src = `${target}/src`
  await creators.createApp(src)
  await creators.createConfig(src)
  await creators.createRouter(src)
  await creators.createStyles(src)
  await creators.createUtils(src)
  await creators.createComponents(src)
}