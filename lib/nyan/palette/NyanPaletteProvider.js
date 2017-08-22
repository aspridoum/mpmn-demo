var Storage = require('../storage');
var Warehouse = require('../warehouse');
var Robot = require('../robot');

/**
 * A provider for quick service task production
 */
function NyanPaletteProvider(palette, create, elementFactory) {

    this._create = create;
    this._elementFactory = elementFactory;

    palette.registerProvider(this);
}

NyanPaletteProvider.prototype.getPaletteEntries = function() {

    var elementFactory = this._elementFactory,
        create = this._create;

    function storageCreate(event) {
        var storageShape = elementFactory.create('shape', { type: 'bpmn:Storage' });
        create.start(event, storageShape);
    }
	
	function serviceCreate(event) {
        var serviceTaskShape = elementFactory.create('shape', { type: 'bpmn:ServiceTask' });
        create.start(event, serviceTaskShape);
    }
	
	function userCreate(event) {
        var userTaskShape = elementFactory.create('shape', { type: 'bpmn:UserTask' });
        create.start(event, userTaskShape);
    }
	
	function wareCreate(event) {
        var dataTaskShape = elementFactory.create('shape', { type: 'bpmn:WarehouseReference' });
        create.start(event, dataTaskShape);
    }
	
	function robotCreate(event) {
        var robotTaskShape = elementFactory.create('shape', { type: 'bpmn:RobotTask' });
        create.start(event, robotTaskShape);
    }
	

    return {
        'create-storage': {
            group: 'storage',
            title: 'Create a storage',
            imageUrl: Storage.dataURL,
            action: {
                dragstart: storageCreate,
                click: storageCreate
            }
        },
        'create-warehouse': {
            group: 'warehouse',
            title: 'Create a warehouse',
            imageUrl: Warehouse.dataURL,
            action: {
                dragstart: wareCreate,
                click: wareCreate
            }
        },
        'create-robot': {
            group: 'robot',
            title: 'Create a robot',
            imageUrl: Robot.dataURL,
            action: {
                dragstart: userCreate,
                click: userCreate
            }
        },
    };
};

module.exports = NyanPaletteProvider;