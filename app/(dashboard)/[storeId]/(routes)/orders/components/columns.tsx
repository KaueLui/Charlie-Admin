"use client"

import { ColumnDef } from "@tanstack/react-table"

export type OrderColumn = {
  id: string
  phone: string
  address: string
  isPaid: boolean;
  totalPrice: string;
  products: string;
  createdAt: string;
}

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: "produtos",
    header: "Produtos",
  },
  {
    accessorKey: "telefone",
    header: "Telefone",
  },
  {
    accessorKey: "endereço",
    header: "Endereço",
  },
  {
    accessorKey: "Preço Total",
    header: "Preço Total",
  },
  {
    accessorKey: "FoiPago",
    header: "Pago",
  },

]
