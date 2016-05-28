import React, { Component } from 'react';
import { render } from 'react-dom';
import { observer } from 'mobx-react';

import Product from './Components/Product';
import ProductStore from './Stores/ProductStore';

@observer
class App extends Component {
    constructor(props) {
        super(props);
        this._onProductAdd = this._onProductAdd.bind(this);
    }
    render() {
        const store = this.props.store;
        return (
            <div className="ProductApp">
                <ul className="Product__list">
                    {store.products.map(
                      (product, idx) => <Product product={product} key={idx}/>
                    )}
                </ul>
                <div className="Product__form">
                  <p>Add new product</p>
                  <input onKeyUp={this._onProductAdd} type="text" />
                </div>
            </div>
        )
    }
    _onProductAdd(event) {
        const value = event.target.value;
        if (event.keyCode === 13 && value.length > 0) {
            this.props.store.addProduct(value);
            event.target.value = '';
        }
    }
}

render(<App store={ProductStore}/>, document.getElementById('app'));
