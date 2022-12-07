import { HttpHelper, OneSkyConfig } from '../../http/index.js';
import { CreateOrderParams, ListOrdersParam, ListOrdersResponse, OrderDetailsResponse } from './order.model.js';

export class OrderApi {
  private _http: HttpHelper;

  constructor(config: OneSkyConfig) {
    this._http = new HttpHelper(config);
  }

  listOrders(options: { projectId: string; params: ListOrdersParam }): Promise<ListOrdersResponse> {
    const url = `projects/${options.projectId}/orders`;

    return this._http.get(url, new URLSearchParams({ ...options.params }));
  }

  showDetails(options: { projectId: string; orderId: string }): Promise<OrderDetailsResponse> {
    const url = `projects/${options.projectId}/orders/${options.orderId}`;

    return this._http.get(url);
  }

  create(options: { projectId: string; params: CreateOrderParams }) {
    const url = `projects/${options.projectId}/orders`;

    return this._http.post(url, new URLSearchParams({ ...(options.params as any) }));
  }
}
