import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { GeneralComponent } from './general/general.component';
import { CampaignComponent } from './campaign/campaign.component';
import { TargetPointsComponent } from './target-points/target-points.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    HomeComponent,
    GeneralComponent,
    CampaignComponent,
    TargetPointsComponent,
    AdvertisementsComponent,
    MarketPlaceComponent,
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule, 
    BrowserModule,
    
  ]
})
export class PagesModule { }
