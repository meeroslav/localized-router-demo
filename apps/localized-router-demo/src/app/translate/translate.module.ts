import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from './translate.service';
import { TranslatePipe } from './translate.pipe';
import { TranslateRoutePipe } from './translate-route.pipe';

@NgModule({
  declarations: [TranslatePipe, TranslateRoutePipe],
  imports: [CommonModule],
  exports: [TranslatePipe, TranslateRoutePipe]
})
export class TranslateModule {
  static forRoot(): ModuleWithProviders<TranslateModule> {
    return {
      ngModule: TranslateModule,
      providers: [
        TranslateService
      ],
    };
  }
}
