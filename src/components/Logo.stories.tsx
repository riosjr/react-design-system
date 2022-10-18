import { Meta, StoryObj } from '@storybook/react'
import { Logo, LogoProps } from './Logo'

//global configurations

export default {
	title: 'Components/Logo',
	component: Logo,
	args: {},
	argTypes: {},
} as Meta<LogoProps>

// varitans configurations

export const Default: StoryObj<LogoProps> = {}
