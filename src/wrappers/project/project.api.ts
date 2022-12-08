import { HttpHelper, OneSkyConfig } from '../../http/index.js';
import {
  CreateProjectParams,
  CreateProjectResponse,
  ListLanguagesResponse,
  ListProjectsResponse,
  ProjectDetailResponse,
  UpdateProjectParams,
} from './project.model.js';

export class ProjectApi {
  private _http: HttpHelper;

  constructor(config: OneSkyConfig) {
    this._http = new HttpHelper(config);
  }

  listProjects(options: { projectGroupId: string }): Promise<ListProjectsResponse> {
    const url = `project-groups/${options.projectGroupId}/projects`;

    return this._http.get(url);
  }

  showProjectDetails(options: { projectId: string }): Promise<ProjectDetailResponse> {
    const url = `projects/${options.projectId}`;

    return this._http.get(url);
  }

  createProject(options: { projectGroupId: string; params: CreateProjectParams }): Promise<CreateProjectResponse> {
    const url = `project-groups/${options.projectGroupId}/projects`;

    return this._http.post(url, new URLSearchParams({ ...options.params } as any));
  }

  updateProject(options: { projectId: string; params: UpdateProjectParams }): Promise<any> {
    const url = `projects/${options.projectId}`;

    return this._http.put(url, new URLSearchParams({ ...options.params }));
  }

  delete(options: { projectId: string }): Promise<any> {
    const url = `projects/${options.projectId}`;

    return this._http.delete(url);
  }

  listLanguages(options: { projectId: string }): Promise<ListLanguagesResponse> {
    const url = `projects/${options.projectId}/languages`;

    return this._http.get(url);
  }
}
