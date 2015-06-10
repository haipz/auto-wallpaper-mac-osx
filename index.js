try {
	var fs = require('fs');
	var request = require('request');
} catch (error) {
	console.log('require error:' + error);
}

var fileDir = __dirname + '/wallpaper/';
var fileName = 'bing.jpg';
var fileUrl = "http://haipz.com/img/bing.jpg";

if (!fs.existsSync(fileDir)) fs.mkdirSync(fileDir);

var downloadFile = function(fileUrl) {

	request({url: fileUrl, encoding: null}, function(error, response, body) {
		if (error) console.log('picture download error: ' + error);
		else {
			fs.writeFile(fileDir + fileName, body, 'binary', function(error) {
				if (error) {
					console.log('picture save error: ' + error);
					fs.unlinkSync(fileDir + fileName);
				} else console.log(fileDir + fileName + ' saved!');
			});
		}
	});

};

downloadFile(fileUrl);