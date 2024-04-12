import React, {
  HTMLAttributes,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface ProductProps {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export interface CartListItem<TItemType extends ProductProps> {
  item: TItemType;
  qty: number;
}

interface CartContextType<TItemType extends ProductProps> {
  cart: CartListItem<TItemType>[];
  addProductToCart: (item: CartListItem<TItemType>) => void;
  removeProductFromCart: (item: TItemType) => void;
  AddMoreOneProductFromCart: (item: CartListItem<TItemType>) => void;
  removeOneProductFromCart: (item: CartListItem<TItemType>) => void;
  totalPrice: number;
  clearCartToLocalStorage: () => void;
}

const defaultContext: CartContextType<any> = {
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  AddMoreOneProductFromCart: () => {},
  removeOneProductFromCart: () => {},
  totalPrice: 0,
  clearCartToLocalStorage: () => {},
};

export function CreateCartContext<TItemType extends ProductProps>() {
  return createContext<CartContextType<TItemType>>(defaultContext);
}

export type CartContextProps<TItemType extends ProductProps> = {
  context: React.Context<CartContextType<TItemType>>;
} & HTMLAttributes<HTMLDivElement>;

export function CartContextProvider<TItemType extends ProductProps>({
  children,
  context,
}: CartContextProps<TItemType>) {
  const [products, setProducts] = useState<CartListItem<TItemType>[]>(
    loadCartFromLocalStorage<TItemType>()
  );
  const [totalPrice, setTotalPrice] = useState(0);

  const getProductById = (id: number): CartListItem<TItemType> | undefined => {
    return products.find((p) => p.item.id === id);
  };

  const addProductToCart = (product: CartListItem<TItemType>): void => {
    const existingProduct = getProductById(product.item.id!);
    let newState: CartListItem<TItemType>[] = [];
    if (existingProduct) {
      newState = products.map((p) => {
        if (p.item.id === existingProduct.item.id) {
          return {
            item: p.item,
            qty: p.qty + product.qty,
          };
        }
        return p;
      });

      setProducts(newState);
    } else {
      setProducts([...products, product]);
    }
  };

  const AddMoreOneProductFromCart = (
    product: CartListItem<TItemType>
  ): void => {
    let newState: CartListItem<TItemType>[] = [];
    newState = products.map((p) => {
      if (p.item.id === product.item.id) {
        return {
          item: p.item,
          qty: p.qty + 1,
        };
      }
      return p;
    });
    setProducts(newState);
  };

  const removeOneProductFromCart = (product: CartListItem<TItemType>): void => {
    let newState: CartListItem<TItemType>[] = [];
    newState = products.map((p) => {
      if (p.item.id === product.item.id) {
        if (p.qty === 0) {
          removeProductFromCart(product.item);
          return {
            item: p.item,
            qty: 0,
          };
        }
        return {
          item: p.item,
          qty: p.qty - 1,
        };
      }
      return p;
    });

    const filteredState = newState.filter((p) => p.qty !== 0);

    setProducts(filteredState);
  };

  const removeProductFromCart = (product: TItemType) => {
    const newProducts = products.filter((p) => p.item.id !== product.id);
    setProducts(newProducts);
  };

  function loadCartFromLocalStorage<
    TItemType extends ProductProps
  >(): CartListItem<TItemType>[] {
    const cartItems = localStorage.getItem("@MKS:cart");
    if (cartItems) {
      return JSON.parse(cartItems);
    }
    return [];
  }

  function saveCartToLocalStorage<TItemType extends ProductProps>(
    cart: CartListItem<TItemType>[]
  ): void {
    localStorage.setItem("@MKS:cart", JSON.stringify(cart));
  }

  function clearCartToLocalStorage() {
    localStorage.setItem("@MKS:cart", JSON.stringify([]));
    setProducts(loadCartFromLocalStorage());
  }

  function totalPriceforPaymentMethod() {
    const initialValue = 0;
    const sumTotalPrice = products.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.qty * Number(currentValue.item.price),
      initialValue
    );
    return setTotalPrice(sumTotalPrice);
  }

  useEffect(() => {
    totalPriceforPaymentMethod();
    saveCartToLocalStorage<TItemType>(products);
  }, [products]);

  const contextValue: CartContextType<TItemType> = {
    cart: products,
    addProductToCart,
    removeProductFromCart,
    AddMoreOneProductFromCart,
    removeOneProductFromCart,
    totalPrice: totalPrice,
    clearCartToLocalStorage,
  };

  return <context.Provider value={contextValue}>{children}</context.Provider>;
}

export const useCart = CreateCartContext<ProductProps>();

