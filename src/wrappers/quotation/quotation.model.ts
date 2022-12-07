import { Language, MetaData } from '../../http/http-helper.model.js';

export interface QuotationParams {
  files: string[];
  to_locale: string;
  is_including_not_translated?: string;
  is_including_not_approved?: string;
  is_including_outdated?: string;
  specialization?: string;
}

export interface Quotation {
  string_count: number;
  word_count: number;
  per_word_cost: string;
  total_cost: string;
  will_complete_at: string;
  will_complete_at_timestamp: number;
  seconds_to_complete: number;
  preferred_translator: {
    will_complete_at: string;
    will_complete_at_timestamp: number;
    seconds_to_complete: number;
  };
}

export interface QuotationResponse {
  meta: MetaData;
  data: {
    files: { name: string }[];
    from_language: Language;
    to_language: Language;
    is_including_not_translated: boolean;
    is_including_not_approved: boolean;
    is_including_outdated: boolean;
    specialization: string;
    translation_only: Quotation;
    translation_and_review: Quotation;
    review_only: Quotation;
  };
}
