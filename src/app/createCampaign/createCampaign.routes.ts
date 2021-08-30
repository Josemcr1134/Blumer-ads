import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { ChooseGoalComponent } from './Step1/choose-goal/choose-goal.component';
import { PublicComponent } from './Step1/public/public.component';
import { AdvertisementsContentComponent } from './Step2/advertisements-content/advertisements-content.component';
import { ScheduleComponent } from './Step1/schedule/schedule.component';
import { BudgetComponent } from './Step1/budget/budget.component';
import { AdPostingComponent } from './Step3/ad-posting/ad-posting.component';



const routes: Routes = [
    {path:'CreateCampaign',
     component:MainComponent,
    children:[
        {path:'ChooseGoal', component:ChooseGoalComponent},
        {path:'Public', component:PublicComponent},
        {path:'AdFormat', component:AdvertisementsContentComponent},
        {path:'Schedule', component:ScheduleComponent},
        {path:'Budget', component:BudgetComponent},
        {path:'AdContent', component: AdvertisementsContentComponent},
         {path:'AdPosting', component: AdPostingComponent},
    ]},
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateCampaignRoutingModule {}
