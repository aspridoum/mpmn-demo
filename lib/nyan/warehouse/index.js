var fs = require('fs');

var embeddedWarehouseImage = fs.readFileSync(__dirname + '/warehouse.png', 'base64');

module.exports.dataURL = 'data:image/png;base64,' + embeddedWarehouseImage;