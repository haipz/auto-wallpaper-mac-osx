var fs = require('fs');
var request = require('request');

var fileDir = __dirname + '/wallpaper/';
var fileName = 'bing.jpg';
var fileUrl = "http://haipz.com/img/bing.jpg";

if (!fs.existsSync(fileDir)) fs.mkdirSync(fileDir);

var downloadFile = function(fileUrl) {

	request({url: fileUrl, encoding: null}, function(error, response, body) {
		if (error || response.statusCode != 200) console.log('Picture download error: ' + error);
		else {
			fs.writeFile(fileDir + fileName, body, 'binary', function(error) {
				if (error) {
					console.log('Picture save error: ' + error);
					fs.unlinkSync(fileDir + fileName);
				} else console.log('Picture saved!');
			});
		}
	});

};

downloadFile(fileUrl);