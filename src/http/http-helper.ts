// @ts-ignore
import md5 from 'md5';
import fetch, { Response } from 'node-fetch';
import { OneSkyConfig, DevHash } from './http-helper.model.js';

export class HttpHelper {
  private _baseUrl = 'https://platform.api.onesky.io/1';
  private _apiKey = '';
  private _secret = '';

  constructor({ baseUrl, apiKey, secret }: OneSkyConfig) {
    if (baseUrl) {
      this._baseUrl = baseUrl;
    }

    this._apiKey = apiKey;
    this._secret = secret;
  }

  async get<T>(endpoint: string, queryParams?: URLSearchParams): Promise<T> {
    const url = this._buildUrl(endpoint, queryParams);

    const response = await fetch(url);
    const result = this._parseResponse<T>(response);

    return result;
  }

  async post<T>(endpoint: string, queryParams?: URLSearchParams): Promise<T> {
    const url = this._buildUrl(endpoint, queryParams);

    const response = await fetch(url, { method: 'POST' });
    const result = this._parseResponse<T>(response);

    return result;
  }

  async put<T>(endpoint: string, queryParams?: URLSearchParams): Promise<T> {
    const url = this._buildUrl(endpoint, queryParams);

    const response = await fetch(url, { method: 'PUT' });
    const result = this._parseResponse<T>(response);

    return result;
  }

  async delete<T>(endpoint: string, queryParams?: URLSearchParams): Promise<T> {
    const url = this._buildUrl(endpoint, queryParams);

    const response = await fetch(url, { method: 'DELETE' });
    const result = this._parseResponse<T>(response);

    return result;
  }

  private _buildUrl(endpoint: string, queryParams?: URLSearchParams) {
    const { hash, timestamp } = this._devhash();

    let url =
      `${this._baseUrl}/${endpoint}?` +
      new URLSearchParams({
        api_key: this._apiKey,
        timestamp: timestamp.toString(),
        dev_hash: hash,
      });

    if (queryParams) {
      url = url + '&' + queryParams;
    }

    return url;
  }

  private async _parseResponse<T>(response: Response): Promise<T> {
    const data = JSON.stringify(await response.json());
    const result: T = JSON.parse(data);

    return result;
  }

  private _devhash(): DevHash {
    const timestamp = Math.floor(Date.now() / 1000);
    return {
      hash: md5(timestamp + this._secret),
      timestamp,
    };
  }
}
