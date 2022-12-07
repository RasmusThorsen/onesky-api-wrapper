import { Language, MetaData } from '../../http/http-helper.model.js';

export interface ListProjectGroupParams {
  page?: string;
  per_page?: string;
}

export interface ListProjectGroupResponse {
  meta: MetaData;
  data: {
    id: number;
    name: string;
  }[];
}

export interface ProjectGroupDetailsResponse {
  meta: MetaData;
  data: {
    id: number;
    name: string;
    enabled_language_count: number;
    project_count: number;
  };
}

export interface CreateProjectGroupParams {
  name: string;
  locale?: string;
}

export interface CreateProjectGroupResponse {
  meta: MetaData;
  data: {
    id: number;
    name: string;
    base_language: Language;
  };
}

export interface ListLanguageResponse {
  meta: MetaData;
  data: Language & { is_base_language: boolean };
}
