"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { HomePage } from "./pages/home";
import "./styles/global.css";
import { queryClient } from "./lib/react-query";
import {
  CartContextProvider,
  ProductProps,
  useCart,
} from "./context/cardContext";

export default function Home() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CartContextProvider<ProductProps> context={useCart}>
          <HomePage />
        </CartContextProvider>
      </QueryClientProvider>
    </>
  );
}
