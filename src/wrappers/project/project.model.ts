import { Language, MetaData } from '../../http/http-helper.model.js';

export interface ListProjectsResponse {
  meta: MetaData;
  data: {
    id: number;
    name: string;
  }[];
}

export interface ProjectDetailResponse {
  meta: MetaData;
  data: {
    id: number;
    name: string;
    description: string;
    project_type: {
      code: string;
      name: string;
    };
    string_count: number;
    word_count: number;
  };
}

export interface CreateProjectParams {
  project_type: string;
  name?: string;
  description: string;
}

export interface CreateProjectResponse {
  meta: MetaData;
  data: {
    id: number;
    project_type: {
      code: string;
      name: string;
    };
    name: string;
    description: string;
  };
}

export interface UpdateProjectParams {
  name: string;
  description: string;
}

export interface ListLanguagesResponse {
  meta: MetaData;
  data: Language &
    {
      is_base_language: boolean;
      is_ready_to_publish: boolean;
      translation_progress: string;
      uploaded_at: string;
      uploaded_at_timestamp: number;
    }[];
}
