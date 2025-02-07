// fees.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FeesPage } from './fees.page';
import { CoreSharedModule } from '@/core/shared.module'; // Ensure this path is correct.
import { AddonFeesMainMenuHandler } from './addon-fees-main-menu-handler.service';

const routes: Routes = [
  {
    path: '', // Root path for lazy-loaded module
    data : { mainMenuTab: "AddonFees" },
    component: FeesPage,
  },
];

@NgModule({
  declarations: [FeesPage], // Declare FeesPage here
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes), // Configure child routes
    CoreSharedModule, // Import shared module if needed
  ],
  exports: [RouterModule], // Export RouterModule if necessary
})
export class FeesPageModule {}
