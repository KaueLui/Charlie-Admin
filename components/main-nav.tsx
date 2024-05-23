"use client";

import { useParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    const pathname = usePathname();
    const params = useParams();

    const routes = [
        {
            href: `/${params.storeId}`,
            label: 'Visão Geral',
            active: pathname === `/${params.storeId}`,
        },
        {
            href: `/${params.storeId}/settings`,
            label: 'Configurações',
            active: pathname === `/${params.storeId}/settings`,
        },
        {
            href: `/${params.storeId}/billboards`,
            label: 'Painel',
            active: pathname === `/${params.storeId}/billboard`,
        },
        
    ];

    return (
        <nav className={cn("flex items-center space-x-4 lg:space-x-6")}>
            {routes.map((route) =>(
             <Link
             key={route.href}
             href={route.href}
             className={cn( "text-sm font-medium transition-colors hover:text-primary",
             route.active ? "text-black dark:text-white"  : "text-muted-foreground"  
             )}>
                {route.label}
             </Link>   
            ))}
        </nav>
    )
};