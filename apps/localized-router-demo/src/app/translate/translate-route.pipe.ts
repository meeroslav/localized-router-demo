import { OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { TranslateService } from './translate.service';

@Pipe({
  name: 'translateRoute'
})
export class TranslateRoutePipe implements PipeTransform, OnDestroy {
  value = '';
  lastKey: string;

  _sub: Subscription;

  constructor(private readonly translate: TranslateService) { }

  transform(key: string): Observable<string> {
    if (!key) {
      return of(key);
    }
    const segments = key.split('/');

    return this.translate.lang$.pipe(
      map(lang => {
        const translatedRoute = segments.map(segment => this.translateSegment(segment)).join('/');
        if (key.startsWith('/')) {
          return `/${lang}${translatedRoute}`;
        } else {
          return translatedRoute;
        }
      })
    );
  }

  ngOnDestroy() {
    this.dispose();
  }

  private dispose() {
    this._sub.unsubscribe();
  }

  private translateSegment(segment: string): string {
    const key = `routes.${segment}`;
    const translation = this.translate.t(key);
    return translation !== key ? translation : segment;
  }
}
