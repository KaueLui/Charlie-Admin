import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { ModalProvider } from "@/providers/modal-provider";

import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard de Administração - Charlie",
  description: "Criado por CharlieFabric",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <ClerkProvider>
   <html lang="pt">
      <body className={inter.className}>
        <ModalProvider />
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
