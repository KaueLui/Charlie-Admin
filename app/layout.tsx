import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { ModalProvider } from "@/providers/modal-provider";
import { ToasterProvider } from "@/providers/toast-provider";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";



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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ToasterProvider />
        <ModalProvider />
        </ThemeProvider>
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
