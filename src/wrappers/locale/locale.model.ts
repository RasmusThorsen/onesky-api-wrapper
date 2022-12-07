import { Language, MetaData } from '../../http/http-helper.model.js';

export interface LocaleResponse {
  meta: MetaData;
  data: Language[];
}
