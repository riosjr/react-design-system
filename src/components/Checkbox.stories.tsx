import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from './Checkbox'
import { Text } from './Text'

//global configurations

export default {
	title: 'Components/Checkbox',
	component: Checkbox,
	args: {},
	argTypes: {},
	decorators: [
		(Story) => (
			<div className="flex items-center gap-2">
				{Story()}
				<Text size="sm">Remind me for 30 days</Text>
			</div>
		),
	],
} as Meta<CheckboxProps>

// varitans configurations

export const Default: StoryObj<CheckboxProps> = {}
