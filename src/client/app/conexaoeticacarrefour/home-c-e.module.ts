import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeCEComponent } from './home-c-e.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HomeCEComponent],
  exports: [HomeCEComponent]
})

export class HomeCEModule { }
