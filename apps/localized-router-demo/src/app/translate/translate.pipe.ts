import { ChangeDetectorRef, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService } from './translate.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform, OnDestroy {
  value = '';
  lastKey: string;

  _sub: Subscription;

  constructor(private readonly translate: TranslateService, private readonly ref: ChangeDetectorRef) { }

  transform(key: string): string {
    if (!key) {
      return key;
    }
    if (key === this.lastKey) {
      return this.value;
    }
    this.lastKey = key;
    this.value = this.translate.t(key);

    this._sub = this.translate.lang$.subscribe(() => {
      this.value = this.translate.t(key);
      this.ref.markForCheck();
    });

    return this.value;
  }

  ngOnDestroy() {
    this.dispose();
  }

  private dispose() {
    this._sub.unsubscribe();
  }
}
