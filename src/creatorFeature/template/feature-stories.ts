import { FeatureParams } from '../../types';
import { capitalize } from '../capitalize';

export const featureStory = (params: FeatureParams) => {
  const Name = capitalize(params.name)
  return `
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ${Name} } from '.'

export default {
  title: '${Name}',
  component: ${Name},
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ${Name}>

const Template: ComponentStory<typeof ${Name}> = (args) => <${Name} {...args} />

export const Default = Template.bind({})
`}
