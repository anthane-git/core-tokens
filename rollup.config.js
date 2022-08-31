import { readFileSync } from 'fs';

import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

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
		// Allows node_modules resolution
		nodeResolve({ extensions }),
		// Allow bundling cjs modules. Rollup doesn't understand cjs
		commonjs(),
		// Compile TypeScript/JavaScript files
		babel({
			extensions,
			include: ['src/**/*', 'build/**/*'],
			babelHelpers: 'bundled',
		}),
	],
	external: [
		...Object.keys(pkg.dependencies ?? {}),
		...Object.keys(pkg.peerDependencies ?? {}),
	],
};
