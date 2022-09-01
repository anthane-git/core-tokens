import { readFileSync } from 'fs';

import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';

const pkg = JSON.parse(
	readFileSync(new URL('./package.json', import.meta.url).pathname)
);
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

/** @type {import('rollup').RollupOptions} */
export default {
	input: 'build/index.ts',
	output: [
		{
			format: 'cjs',
			entryFileNames: '[name][assetExtname].js',
			dir: 'dist/cjs',
			preserveModules: true,
		},
		{
			format: 'es',
			entryFileNames: '[name][assetExtname].mjs',
			dir: 'dist/esm',
			preserveModules: true,
		},
	],
	plugins: [
		nodeResolve({ extensions }),
		commonjs(),
		babel({
			extensions,
			include: ['src/**/*', 'build/**/*'],
			babelHelpers: 'bundled',
		}),
		filesize(),
	],
	external: [
		...Object.keys(pkg.dependencies ?? {}),
		...Object.keys(pkg.peerDependencies ?? {}),
	],
};
