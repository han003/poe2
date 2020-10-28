import axios from 'axios';
import SearchRequest from '@/interfaces/search-request';
import BulkRequest from '@/interfaces/bulk-request';

export default class PoeApi {
  private readonly args: SearchRequest | BulkRequest;
  private readonly url: string;
  private postResp: any;
  private items: {};
  private fetchedCount: number;

  constructor(url: 'string', args: SearchRequest) {
    this.fetchedCount = 0;
    this.url = url;
    this.args = args;
    this.items = {};
  }

  getItems() {
    console.log(`get items`);
    return this?.items || [];
  }

  post() {
    return axios.post(this.url, this.args).then((resp) => {
      this.postResp = resp.data;
      return this.postResp;
    });
  }

  async fetch(count: number) {
    let sleepTime = 1000;
    await new Promise((resolve) => setTimeout(resolve, sleepTime));

    return axios.get(`https://www.pathofexile.com/api/trade/fetch/${this.postResp.result.slice(this.fetchedCount, this.fetchedCount + count)}`).then((resp) => {
      this.fetchedCount += count;

      resp.data.result.forEach((item: {}, index: number) => {
        this.items[index] = item;
      });

      return resp.data.result;
    });
  }
}
