import { useQuery, useMutation, QueryClient } from 'react-query';
import axios from 'axios';
import { Product } from 'types';

const BASE_URL = '/api';

export const queryClient = new QueryClient();

/**
 * Hook to fetch all products.
 * @returns Query result containing the products.
 */
export const useFetchProducts = () => {
  return useQuery('products', async () => {
    const { data } = await axios.get(`${BASE_URL}/products`);
    return data;
  });
};

/**
 * Hook to fetch a product by its ID.
 * @param productId The ID of the product to fetch.
 * @returns Query result containing the product.
 */
export const useFetchProductById = (productId: string) => {
  return useQuery(['product', productId], async () => {
    const { data } = await axios.get(`${BASE_URL}/products/${productId}`);
    return data as Product;
  });
};

/**
 * Hook to add a new product.
 * @returns Mutation function for adding a product.
 */
export const useAddProduct = (
  onSuccessCallback?: (data: any) => void,
  onErrorCallback?: (error: any) => void,
) => {
  return useMutation(async (productData: Product) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/products`, productData);
      queryClient.invalidateQueries('products');
      onSuccessCallback && onSuccessCallback(data);
      return data;
    } catch (error: any) {
      onErrorCallback && onErrorCallback(error.response.data.error.issues);
    }
  });
};

/**
 * Hook to update an existing product.
 * @returns Mutation function for updating a product.
 */
export const useUpdateProduct = (
  onSuccessCallback?: (data: any) => void,
  onErrorCallback?: (error: any) => void,
) => {
  return useMutation(
    async (updatedProductData: Product) => {
      try {
        const { id, ...rest } = updatedProductData;
        const { data } = await axios.put(`${BASE_URL}/products/${id}`, rest);
        queryClient.invalidateQueries('products');
        onSuccessCallback && onSuccessCallback(data);
        return data;
      } catch (error: any) {
        onErrorCallback && onErrorCallback(error.response.data.error.issues);
      }
    },
    {
      onSuccess: (data) => {
        if (onSuccessCallback) {
          onSuccessCallback(data);
        }
      },
      onError: (error) => {
        if (onErrorCallback) {
          onErrorCallback(error);
        }
      },
    },
  );
};

/**
 * Hook to validate a product name.
 * @returns Mutation function for validating a product name.
 */
export const useValidateProductName = (
  onSuccessCallback?: (data: any) => void,
  onErrorCallback?: (error: any) => void,
) => {
  return useMutation(async (productName: string) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/validate`, {
        productName,
      });
      onSuccessCallback && onSuccessCallback(data);
      return data;
    } catch (error: any) {
      console.log('ERORORORO', error);
      onErrorCallback && onErrorCallback(error.response.data.error.issues);
    }
  });
};
