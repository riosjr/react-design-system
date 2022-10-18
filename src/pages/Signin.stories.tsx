import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Signin } from './Signin'

//global configurations

export default {
	title: 'Pages/Sign in',
	component: Signin,
	args: {},
	argTypes: {},
} as Meta

// varitans configurations

export const Default: StoryObj = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		// type some text on form field
		userEvent.type(
			canvas.getByPlaceholderText('Digite seu e-mail'),
			'teste@gmail.com'
		)

		userEvent.type(canvas.getByPlaceholderText('******'), '65432101')

		userEvent.click(canvas.getByRole('button'))
		waitFor(() => {
			expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
		})
	},
}
