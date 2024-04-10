import type { Metadata } from "next";
import StyledComponentsRegistry from "./styles/registry";

export const metadata: Metadata = {
  title: "MKS System Challenge",
  description: "Aplicação modelo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}

