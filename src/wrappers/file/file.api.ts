import { HttpHelper, OneSkyConfig } from '../../http/index.js';
import { DeleteFileResponse, ListFileParams, ListFileResponse } from './file.model.js';

export class FileApi {
  private _http: HttpHelper;

  constructor(config: OneSkyConfig) {
    this._http = new HttpHelper(config);
  }

  listFiles(options: { projectId: string; params?: ListFileParams }): Promise<ListFileResponse> {
    const url = `projects/${options.projectId}/files`;

    return this._http.get(
      url,
      new URLSearchParams({
        ...options.params,
      }),
    );
  }

  // upload() {
  //   throw Error('Feature not implemented yet');
  // }

  delete(options: { projectId: string; file_name: string }): Promise<DeleteFileResponse> {
    const url =
      `projects/${options.projectId}/files` +
      new URLSearchParams({
        file_name: options.file_name,
      });

    return this._http.delete(url);
  }
}
