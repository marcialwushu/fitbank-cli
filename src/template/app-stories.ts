export const appStory = `
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { App } from '.'

export default {
  title: 'Pages/Home',
  component: App,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof App>

const Template: ComponentStory<typeof App> = (args) => <App {...args} />

export const Home = Template.bind({})
`
