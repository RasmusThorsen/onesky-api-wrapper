import { MetaData } from '../../http/http-helper.model.js';

export interface ListFileParams {
  page: string;
  per_page: string;
}

export interface ImportData {
  id: number;
  status: 'completed' | 'in-progress' | 'failed';
}

export interface ListFileData {
  file_name: string;
  string_count: string;
  last_import: ImportData;
  uploaded_at: string;
  uploaded_at_timestamp: number;
}

export interface ListFileResponse {
  meta: MetaData;
  data: ListFileData[];
}

export interface DeleteFileResponse {
  meta: MetaData;
  data: {
    name: string;
  };
}
