import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { CarouselModule, DropdownModule, AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { TimelineComponent, ChatComponent, NotificationComponent } from './home.component';
import {FormsModule} from "@angular/forms";
import {NameListService} from "../../shared/name-list/name-list.service";

@NgModule({
    imports: [CommonModule, RouterModule, CarouselModule, DropdownModule, AlertModule],
    declarations: [HomeComponent, TimelineComponent, ChatComponent, NotificationComponent],
    exports: [HomeComponent, TimelineComponent, ChatComponent, NotificationComponent,CommonModule, FormsModule, RouterModule]
})

export class HomeModule {
  static forRoot(): ModuleWithProviders {
  return {
    ngModule: HomeModule,
    providers: [NameListService]
  };
}
}
