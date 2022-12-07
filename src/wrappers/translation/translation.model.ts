import { Language, MetaData } from '../../http/http-helper.model.js';

export interface ExportFilesParams {
  locale: string;
  source_file_name: string;
  export_file_name?: string;
}

export interface ExportMultilingiualParams {
  source_file_name: string;
  export_file_name?: string;
  file_format?: string;
}

export interface AppStoreDescription {
  app_name: string;
  title: string;
  description: string;
  app_keyword: Record<string, string>;
  app_iap_name: Record<string, string>;
  app_iap_description: Record<string, string>;
}

export interface AppStoreDescriptionResponse {
  meta: MetaData;
  data: AppStoreDescription;
}

export interface GetStatusParams {
  file_name: string;
  locale: string;
}

export interface GetStatusResponse {
  meta: MetaData;
  data: {
    file_name: string;
    locale: Language;
    progress: string;
    string_count: number;
    word_count: number;
  };
}
