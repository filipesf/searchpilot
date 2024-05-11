import PageHeader from 'components/PageHeader';
import ProductForm from 'components/ProductForm';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddProduct } from 'services/ProductService';
import { Product } from 'types';

const NewProductPage: React.FC = () => {
  const addProductMutation = useAddProduct();
  const navigate = useNavigate();

  const newProduct = {
    name: '',
    type: '',
    sizes: [],
    features: [],
    brand: '',
  } as Product;

  const handleSubmit = async (updatedProduct: Product) => {
    try {
      await addProductMutation
        .mutateAsync(updatedProduct)
        .then((response: Product) => navigate(`/products/${response.id}`));
      console.log('Creating new product:', updatedProduct);
    } catch (error: any) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <>
      <PageHeader title="Add new product" />

      <ProductForm
        product={newProduct}
        onSubmit={handleSubmit}
        onSubmitLabel="Add Product"
      />
    </>
  );
};

export default NewProductPage;
