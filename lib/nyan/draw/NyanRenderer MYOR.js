
var inherits = require('inherits');

var BaseRenderer = require('diagram-js/lib/draw/BaseRenderer');

var is = require('bpmn-js/lib/util/ModelUtil').is;

var Storage = require('../storage');
var Warehouse = require('../warehouse');
var Robot = require('../robot');

var svgAppend = require('tiny-svg/lib/append'),
    svgCreate = require('tiny-svg/lib/create');


function NyanRender(eventBus) {
    BaseRenderer.call(this, eventBus, 1500);

    this.canRender = function(element) {
        return is(element, 'bpmn:ServiceTask');
    };


    this.drawShape = function(parent, shape) {
        var url = Storage.dataURL;

        var storageGfx = svgCreate('image', {
            x: 0,
            y: 0,
            width: shape.width,
            height: shape.height,
            href: url
        });

        svgAppend(parent, storageGfx);

        return storageGfx;
    };
	
	this.drawStorage = function(parent, shape) {
        var url = Storage.dataURL;

        var storageGfx = svgCreate('image', {
            x: 0,
            y: 0,
            width: shape.width,
            height: shape.height,
            href: url
        });

        svgAppend(parent, storageGfx);

        return storageGfx;
    };
	
	this.drawWarehouse = function(parent, shape) {
        var url = Warehouse.dataURL;

        var warehouseGfx = svgCreate('image', {
            x: 0,
            y: 0,
            width: shape.width,
            height: shape.height,
            href: url
        });

        svgAppend(parent, warehouseGfx);

        return warehouseGfx;
    };
	
	this.drawRobot = function(parent, shape) {
        var url = Robot.dataURL;

        var robotGfx = svgCreate('image', {
            x: 0,
            y: 0,
            width: shape.width,
            height: shape.height,
            href: url
        });

        svgAppend(parent, robotGfx);

        return robotGfx;
    };
	
}

inherits(NyanRender, BaseRenderer);

module.exports = NyanRender;
