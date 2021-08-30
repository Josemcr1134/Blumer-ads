import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { GeneralComponent } from './general/general.component';
import { CampaignComponent } from './campaign/campaign.component';
import { TargetPointsComponent } from './target-points/target-points.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { HomeComponent } from './home.component';


const routes: Routes = [
    {path: 'Home', component: HomeComponent,
    children:[
        {path:'General', component: GeneralComponent},
        {path:'Campaign', component: CampaignComponent},
        {path:'TargetPoint', component: TargetPointsComponent},
        {path:'advertisements', component: AdvertisementsComponent},
         {path: 'MarketPlace', component: MarketPlaceComponent},
    ]}

/*     {path:'**', pathMatch:'full', redirectTo:'General'}
 */
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
