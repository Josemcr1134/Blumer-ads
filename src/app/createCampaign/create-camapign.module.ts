import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChooseGoalComponent } from './Step1/choose-goal/choose-goal.component';
import { MainComponent } from './main/main.component';
import { PublicComponent } from './Step1/public/public.component';
import { AdvertisementsFormatComponent } from './Step1/advertisements-format/advertisements-format.component';
import { ScheduleComponent } from './Step1/schedule/schedule.component';
import { BudgetComponent } from './Step1/budget/budget.component';
import { AdvertisementsContentComponent } from './Step2/advertisements-content/advertisements-content.component';
import { AdPostingComponent } from './Step3/ad-posting/ad-posting.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    MainComponent,
    ChooseGoalComponent,
    PublicComponent,
    AdvertisementsFormatComponent,
    ScheduleComponent,
    BudgetComponent,
    AdvertisementsContentComponent,
    AdPostingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ComponentsModule
  ]
})
export class CreateCampaignModule { }
