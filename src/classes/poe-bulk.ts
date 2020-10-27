import PoeApi from '@/classes/poe-api';
import BulkRequest from '@/interfaces/bulk-request';

export default class PoeBulk {
  constructor(args: BulkRequest) {
    return new PoeApi('https://www.pathofexile.com/api/trade/exchange/Heist', PoeBulk.handleArgs(args));
  }

  private static handleArgs(args: BulkRequest) {
    return {
      exchange: {
        have: args.myCurrency,
        minimum: args.minStock,
        status: {
          option: args.status ?? 'online',
        },
        want: args.wantCurrency,
      },
    };
  }
}
