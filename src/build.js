const fs = require('fs');
const _ = require('lodash');
const StyleDictionary = require('style-dictionary').extend('./config.json');

const typingsES6Template = _.template(
	fs.readFileSync(`${__dirname}/templates/es6.template`)
);

const scssTemplate = _.template(
	fs.readFileSync(`${__dirname}/templates/scss.template`)
);

const cssTemplate = _.template(
	fs.readFileSync(`${__dirname}/templates/css.template`)
);

StyleDictionary.registerFormat({
	name: 'typings/es6',
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

StyleDictionary.buildAllPlatforms();
