import { Routes } from "@angular/router";

export default [
    {
        path: "payment",
        loadComponent: () => import("./payments/payments.component"),
    }
] as Routes;