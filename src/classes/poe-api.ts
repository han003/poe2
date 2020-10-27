import axios from 'axios';

export default class PoeApi {
  private readonly args: 'ApiRequest | BulkRequest';
  private readonly url: 'string';

  constructor(url: 'string', args: 'ApiRequest | BulkRequest') {
    this.url = url;
    this.args = args;
  }

  post() {
    return axios.post(this.url, this.args);
  }
}
