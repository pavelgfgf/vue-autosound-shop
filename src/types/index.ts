export interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
  description: string
  specs: Record<string, string>
}

export interface CartItem extends Product {
  quantity: number
}

export interface QuantityUpdate {
  productId: number
  quantity: number
}