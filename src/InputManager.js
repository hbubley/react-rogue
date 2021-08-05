class InputManager {
    observers = [];

    subscribe(fn) {
        //keep a list of fn that have subscribed to the input manager
        this.observers.push(fn);
    }

    unsubscribe(fn) {
        //filter out fn's that have unsubscribed
        this.observers = this.observers.filter(subscriber => subscriber !== fn)
    }

    broadcast(action, data) {
        this.observers.forEach(subscriber => subscriber(action, data));
    }

    handleKeys = e => {
        e.preventDefault();
        switch (e.keyCode) {
            case 37: {
                this.broadcast('move', { x: -1, y: 0 });
                break;
            }
            case 38: {
                this.broadcast('move', { x: 0, y: -1 });
                break;
            }
            case 39: {
                this.broadcast('move', { x: 1, y: 0 });
                break;
            }
            case 40: {
                this.broadcast('move', { x: 0, y: 1 });
                break;
            }
            default: {
                break;
            }
        }
    }

    bindKeys() {
        document.addEventListener('keydown', this.handleKeys);
    }

    unbindKey() {
        document.removeEventListener('keydown');
    }
}

export default InputManager