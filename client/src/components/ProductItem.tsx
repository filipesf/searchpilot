import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Product } from 'types';
import { generateProductDescription, getProductIcon } from 'utils';

interface ProductItemProps {
  product: Product;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => (
  <div
    className="product animate"
    style={{ animationDelay: `${parseInt(product.id || '') * 200}ms` }}>
    <div className="product__heading">
      <div className="product__label">
        <i className="product__icon">{getProductIcon(product.type)}</i>
        <span className="product__type">{product.type}</span>
      </div>
      <span className="product__brand">{product.brand}</span>
    </div>

    <div className="product__content">
      <h3 className="product__name">{product.name}</h3>
      <p className="product__description">
        {generateProductDescription(product)}
      </p>
    </div>

    <ul className="product__sizes">
      {product.sizes.map((size) => (
        <li key={size} className="product__size">
          {size}
        </li>
      ))}
    </ul>

    <Link className="button --outlined" to={`/products/${product.id}`}>
      View Details →
    </Link>
  </div>
);

export default ProductItem;
