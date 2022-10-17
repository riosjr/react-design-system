import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputRootProps } from './TextInput'

//global configurations

export default {
	title: 'Components/TextInput',
	component: TextInput.Root,
	args: {
		children: [
			<TextInput.Icon key="first">
				<Envelope />
			</TextInput.Icon>,
			<TextInput.Input
				key="second"
				placeholder="Type your e-mail address"
			/>,
		],
	},
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
	},
} as Meta<TextInputRootProps>

// varitans configurations

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
	args: {
		children: <TextInput.Input placeholder="Type your e-mail address" />,
	},
}
