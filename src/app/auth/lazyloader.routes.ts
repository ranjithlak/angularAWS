import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { DashboardCrmComponent } from "../dashboard-crm/dashboard-crm.component";

export const appRoutes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      { path: "dashboard", component: DashboardCrmComponent },

      { path: "tables", loadChildren: "../tables/tables.module#TablesModule" },
      { path: "maps", loadChildren: "../maps/maps.module#MapsModule" },
      { path: "charts", loadChildren: "../charts/charts.module#ChartsModule" },
      // { path: 'chats', loadChildren: '../chats/chat.module#ChatsModule' }, // fix this
      //{ path: 'mail', loadChildren: '../mail/mail.module#MailModule' }, // fix this
      { path: "pages", loadChildren: "../pages/pages.module#PagesModule" },
      { path: "forms", loadChildren: "../forms/forms.module#FormModule" }, //fix this
      {
        path: "guarded-routes",
        loadChildren:
          "../guarded-routes/guarded-routes.module#GuardedRoutesModule"
      },
      // { path: 'editor', loadChildren: '../editor/editor.module#EditorModule' },
      {
        path: "scrumboard",
        loadChildren:
          "../dashboard-crm.1/dashboard-crm.module#DashboardCrmModule"
      },
      {
        path: "setting",
        loadChildren: "../setting/setting.module#SettingModule"
      }
    ]
  }
];
