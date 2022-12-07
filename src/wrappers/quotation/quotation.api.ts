import { HttpHelper, OneSkyConfig } from '../../http/index.js';
import { QuotationParams, QuotationResponse } from './quotation.model.js';

export class QuotationeApi {
  private _http: HttpHelper;

  constructor(config: OneSkyConfig) {
    this._http = new HttpHelper(config);
  }

  show(options: { projectId: string; params: QuotationParams }): Promise<QuotationResponse> {
    const url = `projects/${options.projectId}/quotations`;

    return this._http.get(url, new URLSearchParams({ ...(options.params as any) }));
  }
}
