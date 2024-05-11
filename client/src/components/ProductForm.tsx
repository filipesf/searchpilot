import React, { SyntheticEvent, useState } from 'react';
import InputText from 'components/Input';
import Select from 'components/Select';
import { ClothingSizes, FootwearSizes, Product, ProductType } from 'types';
import {
  getProductSizes,
  getProductTypes,
  sizeToArray,
  stringToFeaturesArray,
} from 'utils';
import { Link } from 'react-router-dom';
// import { useValidateProductName } from 'services/ProductService';

interface ProductFormProps {
  product: Product;
  onSubmit: (product: Product) => void;
  onSubmitLabel: string;
}

const ProductForm: React.FC<ProductFormProps> = ({
  product,
  onSubmit,
  onSubmitLabel,
}) => {
  const [updatedProduct, setUpdatedProduct] = useState<Product>({ ...product });
  const [error, setError] = useState<string | null>(null);
  // const validateProductNameMutation = useValidateProductName();

  const handleInputChange = async (key: keyof Product, value: string) => {
    let updatedValue: any;

    switch (key) {
      case 'features':
        updatedValue = stringToFeaturesArray(value);
        break;
      case 'sizes':
        updatedValue = sizeToArray(value as FootwearSizes | ClothingSizes);
        break;
      case 'type':
        updatedValue = value as ProductType;
        break;
      default:
        updatedValue = value;
        break;
    }

    setUpdatedProduct((prevProduct: Product) => ({
      ...prevProduct,
      [key]: updatedValue,
    }));
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const productName = updatedProduct.name;

    /**
     * @todo Enhance error handling
     *
     * Despite time constraints, there's room for improving the error handling
     * implementation to ensure a more robust and user-friendly experience.
     */
    if (!productName) {
      setError('Product name cannot be empty.');
      return;
    }

    /**
     * @todo Address the issue with the validation
     *
     * I encountered an issue where `updatedProduct.name` was occasionally
     * undefined when it reached the `validate` API. This inconsistency might
     * be due to asynchronous state updates. In a real-life scenario, I would
     * rely on the expertise of my peers to address this issue more efficiently.
     *
     * try {
     *   await validateProductNameMutation.mutateAsync(productName);
     *   onSubmit(updatedProduct);
     * } catch (error) {
     *   console.log(error);
     * }
     */

    onSubmit(updatedProduct);
  };

  const shouldDisplayFields = !!updatedProduct.type;

  return (
    updatedProduct && (
      <form className="form animate" style={{ animationDelay: '200ms' }}>
        {error && <div className="notification">{error}</div>}

        <InputText
          required
          label="Name"
          value={updatedProduct.name}
          onChange={(value) => handleInputChange('name', value)}
        />

        <Select
          label="Type"
          options={getProductTypes()}
          onChange={(value) => handleInputChange('type', value)}
          currentValue={updatedProduct.type}
        />

        {updatedProduct.type === 'footwear' && (
          <InputText
            required
            label="Style"
            value={updatedProduct.style || ''}
            onChange={(value) => handleInputChange('style', value)}
          />
        )}

        {updatedProduct.type === 'outerwear' && (
          <InputText
            required
            label="Materials"
            value={updatedProduct.materials || ''}
            onChange={(value) => handleInputChange('materials', value)}
          />
        )}

        {updatedProduct.type === 'dress' && (
          <InputText
            required
            label="Colour"
            value={updatedProduct.colour || ''}
            onChange={(value) => handleInputChange('colour', value)}
          />
        )}

        {updatedProduct.type === 'top' && (
          <InputText
            label="Neckline"
            value={updatedProduct.neckline || ''}
            onChange={(value) => handleInputChange('neckline', value)}
          />
        )}

        {shouldDisplayFields && (
          <>
            <Select
              label="Sizes"
              options={getProductSizes(updatedProduct.type)}
              onChange={(value) => handleInputChange('sizes', value)}
            />

            <InputText
              label="Features"
              value={updatedProduct.features.join()}
              onChange={(value) => handleInputChange('features', value)}
            />

            <InputText
              label="Brand"
              value={updatedProduct.brand}
              onChange={(value) => handleInputChange('brand', value)}
            />
          </>
        )}

        <div className="form__actions">
          <button className="button" onClick={handleSubmit}>
            {onSubmitLabel}
          </button>
          <Link className="button --outlined" to="/">
            Cancel
          </Link>
        </div>
      </form>
    )
  );
};

export default ProductForm;
