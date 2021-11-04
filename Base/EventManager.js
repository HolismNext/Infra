var EventEmitter = require('eventemitter3');
const eventEmitter = new EventEmitter();

const EventManager = {
    on: (event, fn) => eventEmitter.on(event, fn),
    off: (event, fn) => eventEmitter.off(event, fn),
    emit: (event, payload) => eventEmitter.emit(event, payload),
    removeListener: (event, fn) => eventEmitter.removeListener(event, fn),
    listeners: (event) => eventEmitter.listeners(event),
    eventEmitter: eventEmitter,
};
export default EventManager;