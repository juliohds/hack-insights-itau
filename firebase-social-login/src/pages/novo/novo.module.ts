import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovoPage } from './novo';

@NgModule({
  declarations: [
    NovoPage,
  ],
  imports: [
    IonicPageModule.forChild(NovoPage),
  ],
})
export class NovoPageModule {}
