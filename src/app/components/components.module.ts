import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './createCampaign/user/user.component';
import { BusinessComponent } from './createCampaign/business/business.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserComponent,
    BusinessComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    UserComponent,
    BusinessComponent
  ]
})
export class ComponentsModule { }
