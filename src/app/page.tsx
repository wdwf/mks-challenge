"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/home";
import "./styles/global.css";
import { queryClient } from "./lib/react-query";

export default function Home() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    </>
  );
}
