import { HttpHelper, OneSkyConfig } from '../../http/index.js';
import {
  CreateProjectGroupParams,
  CreateProjectGroupResponse,
  ListLanguageResponse,
  ListProjectGroupParams,
  ListProjectGroupResponse,
  ProjectGroupDetailsResponse,
} from './project-group.model.js';

export class ProjectGroupApi {
  private _http: HttpHelper;

  constructor(config: OneSkyConfig) {
    this._http = new HttpHelper(config);
  }

  listAll(options: { params: ListProjectGroupParams }): Promise<ListProjectGroupResponse> {
    const url = 'project-groups';

    return this._http.get(url, new URLSearchParams({ ...options.params } as any));
  }

  showDetails(options: { projectGroupId: string }): Promise<ProjectGroupDetailsResponse> {
    const url = `project-groups/${options.projectGroupId}`;

    return this._http.get(url);
  }

  create(options: { params: CreateProjectGroupParams }): Promise<CreateProjectGroupResponse> {
    const url = 'project-groups';

    return this._http.post(url, new URLSearchParams({ ...options.params } as any));
  }

  delete(options: { projectGroupId: string }): Promise<any> {
    const url = `project-groups/${options.projectGroupId}`;

    return this._http.delete(url);
  }

  listLanguages(options: { projectGroupId: string }): Promise<ListLanguageResponse> {
    const url = `project-groups/${options.projectGroupId}/languages`;

    return this._http.get(url);
  }
}
