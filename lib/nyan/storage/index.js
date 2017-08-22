var fs = require('fs');

var embeddedBufferImage = fs.readFileSync(__dirname + '/buffer.png', 'base64');

module.exports.dataURL = 'data:image/png;base64,' + embeddedBufferImage;