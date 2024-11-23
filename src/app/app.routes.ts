import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "configuration",
        loadChildren: () => import("./pages/configuration/configuration.routes"),
    },
    {
        path: "comercial",
        loadChildren: () => import("./pages/comercial/comercial.routes"),
    },
    {
        path: "finance",
        loadChildren: () => import("./pages/finance/finance.routes"),
    },
    {
        path: "**",
        redirectTo: "",
    },
    {
        path: "",
        redirectTo: "",
        pathMatch: "full",
    }
];
