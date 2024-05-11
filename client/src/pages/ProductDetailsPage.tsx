import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetchProductById, useUpdateProduct } from 'services/ProductService';
import ProductForm from 'components/ProductForm';
import { Product } from 'types';
import PageHeader from 'components/PageHeader';

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const productId = id || '';
  const navigate = useNavigate();
  const updateProductMutation = useUpdateProduct();
  const { data, isLoading, isError } = useFetchProductById(productId);
  const [product, setProduct] = useState<Product | undefined>(data);

  useEffect(() => {
    data && setProduct(data);
  }, [data]);

  const handleSubmit = async (updatedProduct: Product) => {
    try {
      await updateProductMutation
        .mutateAsync(updatedProduct)
        .then((response: Product) => navigate(`/products/${response.id}`));
      console.log('Updating product:', updatedProduct);
    } catch (error: any) {
      console.error('Error updating product:', error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching product</div>;

  return (
    product && (
      <>
        <PageHeader title={product.name} />
        <ProductForm
          product={product}
          onSubmit={handleSubmit}
          onSubmitLabel="Update Product"
        />
      </>
    )
  );
};

export default ProductDetailsPage;
