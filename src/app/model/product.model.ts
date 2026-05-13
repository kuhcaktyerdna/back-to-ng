export interface ProductResponse {
  products: Product[],
  total: number,
  skip: number,
  limit: number
}

export interface Product {
  id: number,
  title: string,
  description: string,
  price: number,
  rating: number,
  stock: number,
  brand: string,
  sku: string,
  warrantyInformation: string,
  shippingInformation: string,
  availabilityStatus: AvailabilityStatus,
  returnPolicy: `${string} days return policy` | 'No return policy',
  category: any,
  images: string[],
  thumbnail: string
}

export type AvailabilityStatus = 'In Stock' | 'Low Stock' | 'Out of Stock'
