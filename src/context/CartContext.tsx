// This project is licensed under the MIT License - see the LICENSE file for details

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

export interface Product {
  id: string;
  title: string;
  price: number;
  discountedPrice: number;
}

interface CartContextType {
  cart: Product[];
  addToCart: (_product: Product) => void;
  removeFromCart: (_productId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Product[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (_product: Product) => {
    setCart((prev) => [...prev, _product]);
    alert(`${_product.title} added to the cart.`);
  };

  const removeFromCart = (_productId: string) => {
    setCart((prev) => prev.filter((product) => product.id !== _productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
