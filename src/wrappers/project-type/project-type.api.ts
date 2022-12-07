import { HttpHelper, OneSkyConfig } from '../../http/index.js';
import { ListProjectTypeResponse } from './project-type.model.js';

export class ProjectTypeApi {
  private _http: HttpHelper;

  constructor(config: OneSkyConfig) {
    this._http = new HttpHelper(config);
  }

  listTypes(): Promise<ListProjectTypeResponse> {
    const url = 'project-types';

    return this._http.get(url);
  }
}
