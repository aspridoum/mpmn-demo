
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

	/*
    this.canRender = function(element) {
        return is(element, 'bpmn:ServiceTask');
    };
	*/
	
	this.canRender = function(element) {
		var one = is(element, 'bpmn:ServiceTask');
		var two = is(element, 'bpmn:WarehouseReference');
		var three = is(element, 'bpmn:RobotTask');
		var four = is(element, 'bpmn:Storage');
		
		if ((one===true) || (two===true) || (three===true) ){
			return true;
		} else {
			return false;
		}
		
        //return is(element, 'bpmn:DataObjectReference');
    };
	
    this.drawShape = function(parent, element) {
		var type = element.type;
		var url = Storage.dataURL;
		
		if (type === 'bpmn:ServiceTask') {
			url = Storage.dataURL;
		  }
		 
		if (type === 'bpmn:Storage') {
			url = Storage.dataURL;
		  }		 

		  if (type === 'bpmn:WarehouseReference') {
			  url = Warehouse.dataURL;
		  }
		  
		  if (type === 'bpmn:RobotTask') {
			  url = Robot.dataURL;
		  }

        var shapeGfx = svgCreate('image', {
            x: 0,
            y: 0,
            width: element.width,
            height: element.height,
            href: url
        });

        svgAppend(parent, shapeGfx);

        return shapeGfx;
    };
	
	/*
	this.drawShape = function(parent, element) {
        var url = Storage.dataURL;

        var storageGfx = svgCreate('image', {
            x: 0,
            y: 0,
            width: element.width,
            height: element.height,
            href: url
        });

        svgAppend(parent, storageGfx);

        return storageGfx;
    };
	*/

}

inherits(NyanRender, BaseRenderer);

module.exports = NyanRender;
