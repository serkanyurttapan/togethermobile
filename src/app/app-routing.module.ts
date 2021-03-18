import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AutGuardService } from "./core/aut.guard.service";

const routes: Routes = [
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "",
    canActivate: [AutGuardService],
    runGuardsAndResolvers: "always",
    data: { title: "Together" },
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./tabs/tabs.module").then((m) => m.TabsPageModule),
      },
      {
        path: "chat/:id",
        loadChildren: () =>
          import("./chat/chat.module").then((m) => m.ChatPageModule),
      },
      {
        path: "setting",
        loadChildren: () =>
          import("./setting/setting.module").then((m) => m.SettingPageModule),
      },
      {
        path: "picture",
        loadChildren: () =>
          import("./picture/picture.module").then((m) => m.PicturePageModule),
      },
      {
        path: "edit",
        loadChildren: () =>
          import("./edit/edit.module").then((m) => m.EditPageModule),
      },
    ],
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
