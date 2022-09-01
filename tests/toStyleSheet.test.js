import {
	getCustomProperties,
	getKeyframes,
	getStaticCustomProperties,
} from '../scripts/toStyleSheet';

const mockTokenGroup = {
	'design-token-1': {
		value: 'valueA',
	},
	'design-token-2': {
		value: 'valueB',
	},
};

const mockMotionTokenGroup = {
	...mockTokenGroup,
	'keyframes-token-1': {
		value: 'valueA',
	},
	'keyframes-token-2': {
		value: 'valueB',
	},
};

const mockTokens = {
	colors: {},
	// Note: We don't need to assign mock values to the remaining static tokens.
	depth: mockTokenGroup,
	font: {},
	motion: {},
	legacyTokens: {},
	shape: {},
	spacing: {},
	zIndex: {},
};

const expectedCustomProperties =
	'--core-design-token-1:valueA;--core-design-token-2:valueB;';

const expectedKeyframes =
	'@keyframes core-keyframes-token-1valueA@keyframes core-keyframes-token-2valueB';

const expectedKeyframesCustomProperties =
	'--core-keyframes-token-1:core-keyframes-token-1;--core-keyframes-token-2:core-keyframes-token-2;';

describe('getCustomProperties', () => {
	it('creates a string of CSS custom properties', () => {
		const customProperties = getCustomProperties(mockTokenGroup);

		expect(customProperties).toBe(expectedCustomProperties);
	});

	it('creates a string of CSS custom properties and keyframes at-rules from motion tokens', () => {
		const customProperties = getCustomProperties(mockMotionTokenGroup);

		expect(customProperties).toBe(
			`${expectedCustomProperties}${expectedKeyframesCustomProperties}`
		);
	});
});

describe('getKeyframes', () => {
	it('creates a string of keyframes at-rules', () => {
		const keyframes = getKeyframes(mockMotionTokenGroup);

		expect(keyframes).toBe(expectedKeyframes);
	});
});

describe('getStaticCustomProperties', () => {
	it('creates a string of static CSS custom properties', () => {
		const staticCustomProperties = getStaticCustomProperties(mockTokens);

		expect(staticCustomProperties).toBe(expectedCustomProperties);
	});
});
