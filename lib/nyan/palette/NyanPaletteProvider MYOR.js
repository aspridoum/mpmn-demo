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

    function startCreate(event) {
        var serviceTaskShape = elementFactory.create('shape', { type: 'bpmn:ServiceTask' });
        create.start(event, serviceTaskShape);
    }

    return {
        'create-storage': {
            group: 'activity',
            title: 'Create a new nyan storage!',
            imageUrl: Storage.dataURL,
            action: {
                dragstart: startCreate,
                click: startCreate
            }
        },
        'create-warehouse': {
            group: 'activity',
            title: 'Create a new warehouse!',
            imageUrl: Warehouse.dataURL,
            action: {
                dragstart: startCreate,
                click: startCreate
            }
        },
        'create-robot': {
            group: 'activity',
            title: 'Create a new robot!',
            imageUrl: Robot.dataURL,
            action: {
                dragstart: startCreate,
                click: startCreate
            }
        },
    };
};

module.exports = NyanPaletteProvider;