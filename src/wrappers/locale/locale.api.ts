import { HttpHelper, OneSkyConfig } from '../../http/index.js';
import { LocaleResponse } from './locale.model.js';

export class LocalApi {
  private _http: HttpHelper;

  constructor(config: OneSkyConfig) {
    this._http = new HttpHelper(config);
  }

  listLocales(): Promise<LocaleResponse> {
    return this._http.get('locales');
  }
}
