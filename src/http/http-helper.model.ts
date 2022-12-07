export interface OneSkyConfig {
  baseUrl?: string;
  secret: string;
  apiKey: string;
}

export interface DevHash {
  hash: string;
  timestamp: number;
}

export interface Language {
  code: string;
  english_name: string;
  local_name: string;
  locale: string;
  region: string;
}

export interface MetaData {
  status?: number;
  message?: string;
  record_count?: number;
  page_count?: number;
  next_page?: string;
  prev_page?: string;
  first_page?: string;
  last_page?: string;
  language?: Language;
}
