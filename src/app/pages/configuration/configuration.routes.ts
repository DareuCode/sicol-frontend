import { Routes } from "@angular/router";

export default [
    {
        path: "general-type",
        loadComponent: () => import("./general-type/general-type.component"),
    },
    {
        path: "product",
        loadComponent: () => import("./product/product.component"),
    },
    {
        path: "supplier",
        loadComponent: () => import("./supplier/supplier.component"),
    }
] as Routes;