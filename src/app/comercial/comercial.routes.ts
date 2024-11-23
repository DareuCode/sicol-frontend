import { Routes } from "@angular/router";

export default [
    {
        path: "order",
        loadComponent: () => import("./order/order.component"),
    },
    {
        path: "quotation",
        loadComponent: () => import("./quotation/quotation.component"),
    }
] as Routes;