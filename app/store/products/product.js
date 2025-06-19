import { create } from 'zustand'
import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest
} from '../../utills/constant'

export const useProductStore = create((set, get) => ({
  products: [],
  cart: {},
  loading: false,
  cartResponse: [],

  fetchProducts: async () => {
    debugger
    set({ loading: true })
    try {
      const response = await getRequest('/products')
      set({ products : response , loading: false })
    } catch (err) {
      set({ loading: false })
      console.error('Fetch Products Error:', err)
    }
  },

  productDetail: async (id) => {
    set({ loading: true })
    try {
      const products = await getRequest('/products')
      set({ products, loading: false })
    } catch (err) {
      set({ loading: false })
      console.error('Fetch Products Error:', err)
    }
  },
  addToCart: async (product) => {
  try {

    const {getCartCount } = get()

    const payload = {
    // "id": 10,
    "userId": 10,
    "products": product
}
    await postRequest('/carts', payload)
    set((state) => {
      const currentQty = state.cart[product.id] || 0
      getCartCount()
      return {
        cart: {
          ...state.cart,
          [product.id]: currentQty + 1,
        },
      }
    })
  } catch (err) {
    console.error('Add to Cart Error:', err)
  }
},
     getCartCount: async() => {
  const response = await getRequest('/carts')
  set({ cartResponse: response })
  console.log('Cart Response:', response)
    // return Object.values(cart).reduce((acc, qty) => acc + qty, 0)
  },
}))


