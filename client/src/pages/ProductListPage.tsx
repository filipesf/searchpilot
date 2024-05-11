import PageHeader from 'components/PageHeader';
import ProductItem from 'components/ProductItem';
import React from 'react';
import { useFetchProducts } from 'services/ProductService';
import { Product } from 'types';

const ProductListPage: React.FC = () => {
  const { data: products, isLoading, isError } = useFetchProducts();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching products</div>;

  return (
    <>
      <PageHeader title="Product List" />

      <div className="product-list">
        {products &&
          products.map((product: Product) => (
            <ProductItem product={product} key={product.id} />
          ))}
      </div>
    </>
  );
};

export default ProductListPage;
