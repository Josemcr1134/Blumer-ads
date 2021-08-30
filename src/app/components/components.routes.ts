import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserComponent } from './createCampaign/user/user.component';
import { BusinessComponent } from './createCampaign/business/business.component';


const routes: Routes = [
    {path:'UserOptions', component: UserComponent},
    {path:'BusinnesOptions', component: BusinessComponent},
    {path:'', pathMatch:'full', redirectTo:'BusinnesOptions'},
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule {}
