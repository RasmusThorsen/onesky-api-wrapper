import { HttpHelper, OneSkyConfig } from '../../http/index.js';
import {
  AppStoreDescriptionResponse,
  ExportFilesParams,
  ExportMultilingiualParams,
  GetStatusParams,
  GetStatusResponse,
} from './translation.model.js';

export class TranslationApi {
  private _http: HttpHelper;

  constructor(config: OneSkyConfig) {
    this._http = new HttpHelper(config);
  }

  export(options: { projectId: string; params: ExportFilesParams }): Promise<File> {
    const url = `projects/${options.projectId}/translations`;

    return this._http.get(url, new URLSearchParams({ ...options.params }));
  }

  exportMultilingual(options: { projectId: string; params: ExportMultilingiualParams }): Promise<File> {
    const url = `projects/${options.projectId}/translations/multilingual`;

    return this._http.get(url, new URLSearchParams({ ...options.params }));
  }

  exportAppStoreDescription(options: { projectId: string; locale: string }): Promise<AppStoreDescriptionResponse> {
    const url = `projects/${options.projectId}/translations/app-descriptions`;

    return this._http.get(url, new URLSearchParams({ locale: options.locale }));
  }

  getStatus(options: { projectId: string; params: GetStatusParams }): Promise<GetStatusResponse> {
    const url = `projects/${options.projectId}/translations/status`;

    return this._http.get(url, new URLSearchParams({ ...options.params }));
  }
}
