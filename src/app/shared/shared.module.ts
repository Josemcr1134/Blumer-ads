import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollerComponent } from './scroller/scroller.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { AsideComponent } from './aside/aside.component';



@NgModule({
  declarations: [
    TopBarComponent,
    FooterComponent,
    ScrollerComponent,
    SidebarComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [
    TopBarComponent,
    FooterComponent,
    ScrollerComponent,
    SidebarComponent,
    AsideComponent
  ]
})
export class SharedModule { }
