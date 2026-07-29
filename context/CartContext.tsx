"use client";

import {
  createContext,
  useContext,
  useReducer,
  useState,
  ReactNode,
  useCallback,
  useMemo,
} from "react";
import { MenuItem } from "@/lib/data";

export type AddOn = {
  id: string;
  name: string;
  price: number;
};

export type CartItemType = {
  uniqueId: string;
  menuItem: Pick<MenuItem, "id" | "name" | "price" | "image">;
  quantity: number;
  addOns: AddOn[];
};

type CartState = { items: CartItemType[] };

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItemType }
  | { type: "REMOVE_ITEM"; payload: string }
  | {
      type: "UPDATE_QUANTITY";
      payload: { uniqueId: string; quantity: number };
    }
  | { type: "CLEAR_CART" };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.payload] };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((i) => i.uniqueId !== action.payload),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((i) =>
          i.uniqueId === action.payload.uniqueId
            ? { ...i, quantity: Math.max(1, action.payload.quantity) }
            : i,
        ),
      };
    case "CLEAR_CART":
      return { items: [] };
    default:
      return state;
  }
}

let idCounter = 0;

function generateId(): string {
  return `cart-${++idCounter}-${Date.now()}`;
}

export function parsePrice(priceStr: string): number {
  return parseFloat(
    priceStr.replace("R$", "").replace(/\./g, "").replace(",", ".").trim(),
  );
}

export function formatPrice(value: number): string {
  return `R$ ${value.toFixed(2).replace(".", ",")}`;
}

type CartContextType = {
  items: CartItemType[];
  addItem: (item: Omit<CartItemType, "uniqueId">) => string;
  removeItem: (uniqueId: string) => void;
  updateQuantity: (uniqueId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isModalOpen: boolean;
  selectedItem: MenuItem | null;
  startAtCart: boolean;
  openModal: (item: MenuItem) => void;
  openCart: () => void;
  closeModal: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [startAtCart, setStartAtCart] = useState(false);

  const addItem = useCallback((item: Omit<CartItemType, "uniqueId">) => {
    const uniqueId = generateId();
    dispatch({ type: "ADD_ITEM", payload: { ...item, uniqueId } });
    return uniqueId;
  }, []);

  const removeItem = useCallback((uniqueId: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: uniqueId });
  }, []);

  const updateQuantity = useCallback(
    (uniqueId: string, quantity: number) => {
      dispatch({ type: "UPDATE_QUANTITY", payload: { uniqueId, quantity } });
    },
    [],
  );

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR_CART" });
  }, []);

  const openModal = useCallback((item: MenuItem) => {
    setSelectedItem(item);
    setStartAtCart(false);
    setIsModalOpen(true);
  }, []);

  const openCart = useCallback(() => {
    setSelectedItem(null);
    setStartAtCart(true);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedItem(null);
    setStartAtCart(false);
  }, []);

  const totalItems = useMemo(
    () => state.items.reduce((sum, i) => sum + i.quantity, 0),
    [state.items],
  );

  const totalPrice = useMemo(
    () =>
      state.items.reduce((sum, i) => {
        const base = parsePrice(i.menuItem.price);
        const addOns = i.addOns.reduce((a, b) => a + b.price, 0);
        return sum + (base + addOns) * i.quantity;
      }, 0),
    [state.items],
  );

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isModalOpen,
        selectedItem,
        startAtCart,
        openModal,
        openCart,
        closeModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useCart must be used within CartProvider");
  return context;
}
