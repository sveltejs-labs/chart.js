import type { ArgTypes } from '@storybook/svelte';
import type { ChartProps } from '$lib/utils/type';

export const argTypes: Partial<ArgTypes<ChartProps>> = {
	data: {
		control: 'object'
	},
	options: {
		control: 'object'
	},
	updateMode: {
		control: 'select'
	},
	id: {
		control: 'text'
	},
	width: {
		control: {
			type: 'number'
		}
	},
	height: {
		control: {
			type: 'number'
		}
	},
	ariaLabel: {
		control: 'text'
	},
	role: {
		control: 'text'
	}
};

export default argTypes;
