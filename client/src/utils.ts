import { ClothingSizes, FootwearSizes, Product, ProductType } from 'types';

/**
 * Array of available product types.
 */
export const productTypes: ProductType[] = [
  'footwear',
  'activewear',
  'outerwear',
  'dress',
  'top',
];

/**
 * Array of available footwear sizes.
 */
export const footwearSizes: FootwearSizes[] = ['US 7', 'US 8', 'US 9', 'US 10'];

/**
 * Array of available clothing sizes.
 */
export const clothingSizes: ClothingSizes[] = ['XS', 'S', 'M', 'L', 'XL'];

/**
 * Format a field label by capitalizing the first letter.
 * @param fieldLabel - The label to format.
 * @returns The formatted label.
 */
export const formatFieldLabel = (fieldLabel: string): string => {
  return fieldLabel.charAt(0).toUpperCase() + fieldLabel.slice(1);
};

/**
 * Get product types in a format suitable for select inputs.
 * @returns An array of objects with 'label' and 'value' properties.
 */
export const getProductTypes = (): { label: string; value: ProductType }[] => {
  return productTypes.map((productType) => {
    return { label: formatFieldLabel(productType), value: productType };
  });
};

/**
 * Get product sizes based on the selected product type.
 * @param productType - The type of product.
 * @returns An array of objects with 'label' and 'value' properties.
 */
export const getProductSizes = (
  productType: ProductType,
): { label: string; value: string }[] => {
  const productSizes =
    productType === 'footwear' ? footwearSizes : clothingSizes;

  return productSizes.map((productSize) => {
    return { label: formatFieldLabel(productSize), value: productSize };
  });
};

/**
 * Convert a comma-separated string of features to an array of features.
 * @param featuresString - The string of features.
 * @returns An array of features.
 */
export const stringToFeaturesArray = (featuresString: string): string[] => {
  return featuresString.split(',').map((feature) => feature.trim());
};

/**
 * Convert a product size to an array.
 * @param size - The product size.
 * @returns An array containing the product size.
 */
export const sizeToArray = (
  size: FootwearSizes | ClothingSizes,
): (FootwearSizes | ClothingSizes)[] => {
  return [size];
};

/**
 * Get an emoji icon representing the product type.
 * @param productType - The type of product.
 * @returns An emoji icon.
 */
export const getProductIcon = (productType: ProductType): string => {
  let icon;

  switch (productType) {
    case 'footwear':
      icon = '🥾';
      break;
    case 'activewear':
      icon = '🏋️';
      break;
    case 'outerwear':
      icon = '🧥';
      break;
    case 'dress':
      icon = '👗';
      break;
    default:
      icon = '🎽';
      break;
  }

  return icon;
};

/**
 * Generate a product description based on its properties.
 * @param product - The product object.
 * @returns A descriptive string of the product.
 */
export const generateProductDescription = (product: Product): string => {
  let description = '';

  const hasNoProperties =
    !product.style &&
    !product.materials &&
    !product.colour &&
    !product.neckline;

  if (product.style) {
    description += `With a ${product.style.toLowerCase()} style, `;
  }

  if (product.materials) {
    description += `Crafted from ${product.materials.toLowerCase()}, `;
  }

  if (product.colour) {
    description += `In a ${product.colour.toLowerCase()} hue, `;
  }

  if (product.neckline) {
    description += `Featuring a ${product.neckline.toLowerCase()} neckline, `;
  }

  if (hasNoProperties) {
    description += `The ${product.name}`;
  } else {
    description += `the ${product.name}`;
  }

  if (product.features.length > 0) {
    description += ` features ${product.features.join(', ').toLowerCase()}.`;
  } else {
    description += `.`;
  }

  return description;
};
