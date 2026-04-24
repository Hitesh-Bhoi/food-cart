import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image_url: string;
  quantity: number;
  unit: string;
};

interface CartState {
  cartItems: CartItem[];
}

// Helper to safely load state from localStorage in the browser environment
const loadCartState = (): CartItem[] => {
  if (typeof window === 'undefined') {
    return [];
  }
  try {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      return JSON.parse(savedCart);
    }
  } catch (err) {
    console.error('Failed to load cart state from local storage', err);
  }
  return [];
};

const initialState: CartState = {
  cartItems: loadCartState(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ product: any; quantity?: number }>) => {
      const { product, quantity = 1 } = action.payload;
      const existing = state.cartItems.find((item) => item.name === product.name);
      
      if (existing) {
        existing.quantity += quantity;
      } else {
        state.cartItems.push({
          id: product.name,
          name: product.name,
          price: Number(product.price),
          image_url: product.image_url,
          unit: product.unit,
          quantity,
        });
      }
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state.cartItems));
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter((item) => item.name !== action.payload);
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state.cartItems));
      }
    },
    updateQuantity: (state, action: PayloadAction<{ name: string; quantity: number }>) => {
      const { name, quantity } = action.payload;
      if (quantity <= 0) {
        state.cartItems = state.cartItems.filter((item) => item.name !== name);
      } else {
        const item = state.cartItems.find((item) => item.name === name);
        if (item) {
          item.quantity = quantity;
        }
      }
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state.cartItems));
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state.cartItems));
      }
    },
    setCartItems: (state, action: PayloadAction<CartItem[]>) => {
      state.cartItems = action.payload;
    }
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, setCartItems } = cartSlice.actions;

export default cartSlice.reducer;
