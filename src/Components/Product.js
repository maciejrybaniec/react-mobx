import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class Product extends Component {
    constructor(props) {
        super(props);
        this._onClick = this._onClick.bind(this);
    }
    render() {
        const available = this.props.product.available ? 'yes': 'no';
        return (
            <li className="Product">
              <h4>{this.props.product.name}</h4>
              <div onClick={this._onClick}>Available (click): {available}</div>
            </li>
        )
    }
    _onClick() {
        this.props.product.available = !this.props.product.available;
    }
}

export default Product;
