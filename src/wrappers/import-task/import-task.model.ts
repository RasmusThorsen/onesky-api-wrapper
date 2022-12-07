import { Language, MetaData } from '../../http/http-helper.model.js';

export interface ListImportTaskParams {
  page?: string;
  per_page?: string;
  status?: 'all' | 'completed' | 'in-progress' | 'failed';
}

export interface ImportTask {
  id: number;
  file: {
    name: string;
  };
  status: 'completed' | 'in-progress' | 'failed';
  created_at: string;
  created_at_timestamp: number;
}

export interface ListImportTaskResponse {
  meta: MetaData;
  data: ImportTask[];
}

export interface ShowImportTask {
  id: number;
  file: {
    name: string;
    format: string;
    locale: Language;
  };
  string_count: number;
  word_count: number;
  status: 'completed' | 'in-progress' | 'failed';
  created_at: string;
  created_at_timestamp: string;
}

export interface ShowImportTaskResponse {
  meta: MetaData;
  data: ShowImportTask;
}
