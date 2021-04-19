import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(private readonly translate: TranslateService) { }

  transform(value: string): string {
    return this.translate.t(value);
  }

}
