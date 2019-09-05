import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';
import { ColorsComponent } from './colors/colors.component';
import { BordersComponent } from './borders/borders.component';
import { AnimationsComponent } from './animations/animations.component';
import { OtherComponent } from './other/other.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { CanDeactivateLoginGuard } from './can-deactivate-login.guard';

const routes: Routes = [
  {
    path: 'login',
    canDeactivate: [ CanDeactivateLoginGuard ],
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
        // component: DashboardComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'page1',
        component: Page1Component
      },
      {
        path: 'page2',
        component: Page2Component
      },
      {
        path: 'charts',
        component: ChartsComponent
      },
      {
        path: 'tables',
        component: TablesComponent
      },
      {
        path: 'utilities',
        children: [
          {
            path: '',
            component: OtherComponent
          },
          {
            path: 'animations',
            component: AnimationsComponent
          },
          {
            path: 'borders',
            component: BordersComponent
          },
          {
            path: 'colors',
            component: ColorsComponent
          },
          {
            path: 'colors/:type',
            component: ColorsComponent
          },
          {
            path: 'other',
            component: OtherComponent
          }
        ]
      },
      {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
      },
      {
        path: '404',
        component: NotFoundComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
