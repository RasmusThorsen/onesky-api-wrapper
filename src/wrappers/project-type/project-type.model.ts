import { MetaData } from '../../http/http-helper.model.js';

export interface ListProjectTypeResponse {
  meta: MetaData;
  data: {
    code: string;
    name: string;
  }[];
}
