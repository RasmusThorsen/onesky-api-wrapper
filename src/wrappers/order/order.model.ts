import { Language, MetaData } from '../../http/http-helper.model.js';

export interface ListOrdersParam {
  page?: string;
  per_page?: string;
  file_name?: string;
}

export interface Order {
  id: number;
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
  ordered_at: string;
  ordered_at_timestamp: number;
}

export interface ListOrdersResponse {
  meta: MetaData;
  data: Order[];
}

export interface Task {
  status: 'in-progress' | 'completed';
  to_language: Language;
  translator: { name: string };
  string_count: number;
  word_count: number;
  will_complete_at: string;
  will_complete_at_timestamp: number;
  seconds_to_complete: number;
  completed_at: string;
  completed_at_timestamp: number;
}

export interface OrderDetailsResponse {
  meta: MetaData;
  data: {
    id: number;
    status: 'pending' | 'in-progress' | 'completed' | 'failed';
    amount: string;
    files: { name: string }[];
    from_language: Language;
    tasks: Task[];
    order_type: string;
    tone: string;
    specialization: string;
    note: string;
    ordered_at: string;
    ordered_at_timestamp: number;
  };
}

export interface CreateOrderParams {
  files: string[];
  to_locale: string;
  order_type?: 'translate-only' | 'review-only' | 'translate-review';
  is_including_not_translated?: boolean;
  is_including_not_approved?: boolean;
  is_including_outdated?: boolean;
  translator_type?: 'prefered' | 'fastest';
  tone?: 'not-specified' | 'formal' | 'informal';
  specialization?: 'general' | 'game';
  note?: string;
}
