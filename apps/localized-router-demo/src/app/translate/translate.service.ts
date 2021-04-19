import { Injectable } from '@angular/core';
import { LANGUAGES, DEFAULT_LANGUAGE, Resource, TRANSLATION_RESOURCE } from './resource';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private lang = DEFAULT_LANGUAGE;
  private resources: Record<string, string>;

  constructor() {
    this.resources = this.flattenResources(TRANSLATION_RESOURCE);
  }

  get languages() {
    return LANGUAGES;
  }
  get language(): string {
    return this.lang;
  }
  set language(lang: string) {
    if (LANGUAGES.find(l => l.code === lang.toLowerCase())) {
      this.lang = lang.toLowerCase();
    }
  }

  t(key: string): string {
    return this.resources[this.lang]?.[key] ?? key;
  }

  private flattenResources(input: Resource): Record<string, string> {
    return Object.entries(input).reduce((res, [lang, resource]) => ({
      ...res,
      [lang]: this.flattenResource([], resource)
    }), {});
  }

  private flattenResource(segments: string[], resource: string | Resource): Record<string, string> {
    if (typeof resource === 'string') {
      return { [segments.join('.')]: resource }
    } else {
      return Object.entries(resource).reduce((res, [key, entry]) => ({
        ...res,
        ...this.flattenResource([...segments, key], entry)
      }), {})
    }
  }
}
