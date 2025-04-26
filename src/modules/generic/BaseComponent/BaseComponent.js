class BaseComponent {

    constructor() {
        if (this.constructor === BaseComponent) throw new Error('Can not instantiate abstract class')
    }

    getProxyState(initialState) {
        return new Proxy(initialState, {

            get: (target, prop) => {
                return target[prop]
            },

            set: (target, prop, newValue) => {
                const oldValue = target[prop];

                target[prop] = newValue

                if (newValue !== oldValue) this.updateUI()
                return true;
            },
        });
    }

    updateUI() {
        throw new Error('Method updateUI should be implemented!');
    }
}


export default BaseComponent