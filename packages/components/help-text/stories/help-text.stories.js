import { html, storiesOf } from '@open-wc/demoing-storybook';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';

import { helpers } from '@tradeshift/elements';
import '@tradeshift/elements.help-text';

import { sizes, types } from '../src/utils';
import readme from '../README.md';

storiesOf('ts-help-text', module)
	.addDecorator(
		withKnobs({
			escapeHTML: false
		})
	)
	.add(
		'default',
		() => {
			const size = select(
				'size',
				{
					default: '',
					...helpers.objectKeysChangeCase(sizes)
				},
				''
			);
			const type = select(
				'type',
				{
					default: '',
					...helpers.objectKeysChangeCase(types)
				},
				''
			);

			const rtl = boolean('rtl', false);
			const disabled = boolean('disabled', false);
			const title = text('accepted-file-extensions', 'Help text title');
			const messages = text(
				'help-text-messages',
				'["Help message", "Some very very long long help text to give user more information about the input that they need to provide"]'
			);

			return html`
				<ts-help-text
					?rtl="${rtl}"
					?disabled="${disabled}"
					title="${title}"
					messages="${messages}"
					size="${size}"
					type="${type}"
				></ts-help-text>
			`;
		},
		{ notes: readme }
	);
