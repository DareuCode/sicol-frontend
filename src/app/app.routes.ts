import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "configuration",
        loadChildren: () => import("./configuration/configuration.routes"),
    },
    {
        path: "comercial",
        loadChildren: () => import("./comercial/comercial.routes"),
    },
    {
        path: "finance",
        loadChildren: () => import("./finance/finance.routes"),
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
