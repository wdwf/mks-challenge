import type { Metadata } from "next";
import StyledComponentsRegistry from "./styles/registry";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "MKS System Challenge",
  description: "Aplicação modelo",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <body className={montserrat.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}

