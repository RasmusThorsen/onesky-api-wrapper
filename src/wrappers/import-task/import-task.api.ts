import { HttpHelper, OneSkyConfig } from '../../http/index.js';
import { ListImportTaskParams, ListImportTaskResponse, ShowImportTaskResponse } from './import-task.model.js';

export class ImportTaskApi {
  private _http: HttpHelper;

  constructor(config: OneSkyConfig) {
    this._http = new HttpHelper(config);
  }

  listTasks(options: { projectId: string; params: ListImportTaskParams }): Promise<ListImportTaskResponse> {
    const url = `projects/${options.projectId}/import-tasks`;

    return this._http.get(url, new URLSearchParams({ ...options.params }));
  }

  showTasks(options: { projectId: string; importId: string }): Promise<ShowImportTaskResponse> {
    const url = `projects/${options.projectId}/import-tasks/${options.importId}`;

    return this._http.get(url);
  }
}
