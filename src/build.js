const fs = require('fs');
const _ = require('lodash');
const StyleDictionary = require('style-dictionary').extend('./config.json');

const typingsES6Template = _.template(
	fs.readFileSync(`${__dirname}/templates/es6.template`)
);

StyleDictionary.registerFormat({
	name: 'typings/es6',
	formatter: typingsES6Template,
});

StyleDictionary.buildAllPlatforms();