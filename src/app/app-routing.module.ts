import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCampaignRoutingModule } from './createCampaign/createCampaign.routes';
import { PagesRoutingModule } from './pages/pages.routes';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesRoutingModule, CreateCampaignRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
