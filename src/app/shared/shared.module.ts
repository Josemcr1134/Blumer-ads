import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollerComponent } from './scroller/scroller.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TopBarComponent,
    FooterComponent,
    ScrollerComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [
    TopBarComponent,
    FooterComponent,
    ScrollerComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
