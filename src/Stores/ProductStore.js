import mobx, { observable, computed, action } from 'mobx';

class ProductStore {
    @observable products = [];

    constructor() {
        mobx.autorun(() => console.log(`Products ${this.cart}`));
    }

    @computed get availableProducts() {
        return this.products.filter((product) => {
            return product.available === true
        }).length;
    }

    @computed get cart() {
        return this.availableProducts;
    }

    @action addProduct(name) {
        this.products.push({
            name,
            available: true
        });
    }
}

export default new ProductStore();
