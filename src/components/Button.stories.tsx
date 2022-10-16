import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

//global configurations

export default {
	title: 'Components/Button',
	component: Button,
	args: {
		children: 'Create account',
	},
	argTypes: {},
} as Meta<ButtonProps>

// varitans configurations

export const Default: StoryObj<ButtonProps> = {}
