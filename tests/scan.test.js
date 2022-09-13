var fs = require('fs');
const path = require('path');

module.exports = () => {
	fs.readdir(path.resolve(__dirname, '../tokens/'), function (err, files) {
		if (err) {
			console.log('Scan Test Failed: error caught!');
			process.exit(1);
		} else {
			if (!files.length) {
				console.log('Scan Test Failed: no files found in tokens folder!');
				process.exit(1);
			}

			console.log('Scan Test Passed!');
		}
	});
};
