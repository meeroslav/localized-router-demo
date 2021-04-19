import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from './translate.service';
import { TranslatePipe } from '../translate.pipe';



@NgModule({
  declarations: [
    TranslatePipe
  ],
  imports: [
    CommonModule
  ],
  providers: [TranslateService]
})
export class TranslateModule { }
