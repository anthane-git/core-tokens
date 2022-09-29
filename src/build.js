const fs = require('fs');
const _ = require('lodash');
const StyleDictionary = require('style-dictionary').extend('./config.json');

const typingsES6Template = _.template(
	fs.readFileSync(`${__dirname}/templates/types.ejs`)
);

const scssTemplate = _.template(
	fs.readFileSync(`${__dirname}/templates/scss.ejs`)
);

const cssTemplate = _.template(
	fs.readFileSync(`${__dirname}/templates/css.ejs`)
);

const jsTemplate = _.template(fs.readFileSync(`${__dirname}/templates/js.ejs`));

StyleDictionary.registerFormat({
	name: 'typings/types',
	formatter: typingsES6Template,
});

StyleDictionary.registerFormat({
	name: 'schema/scss',
	formatter: scssTemplate,
});

StyleDictionary.registerFormat({
	name: 'schema/css',
	formatter: cssTemplate,
});

StyleDictionary.registerFormat({
	name: 'schema/js',
	formatter: jsTemplate,
});

StyleDictionary.buildAllPlatforms();
