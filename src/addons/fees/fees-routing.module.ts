// addon-fees.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CoreMainMenuTabRoutingModule } from '@features/mainmenu/mainmenu-tab-routing.module';
import { CoreCourseIndexRoutingModule } from '@features/course/course-routing.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'fees',
    loadChildren: () =>
      import('./fees.module').then((m) => m.FeesPageModule), // Use correct path to fees.module
  },
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CoreMainMenuTabRoutingModule.forChild(routes), // Register routes in main menu module
    CoreCourseIndexRoutingModule.forChild({ children: routes }), // Attach routes to course index
    RouterModule.forChild(routes), // Attach RouterModule
  ],
  exports: [RouterModule], // Export RouterModule if needed
})
export class AddonFeesPageModule {}


export class AddonFees {
  static isPluginEnabled(): boolean {
      // Logic to check if the fees plugin is enabled
      return true; // For example, you can check from local storage or a configuration
  }
}
