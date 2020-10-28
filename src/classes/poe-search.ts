import PoeApi from '@/classes/poe-api';
import SearchRequest from '@/interfaces/search-request';

export default class PoeSearch {
  constructor(args: SearchRequest) {
    return new PoeApi('https://www.pathofexile.com/api/trade/search/Heist', PoeSearch.handleArgs(args));
  }

  private static handleArgs(args: SearchRequest) {
    return {
      query: {
        name: args.name,
        type: args.type,
        filters: {
          trade_filters: {
            disabled: args.tradeFiltersDisabled ?? false,
            filters: {
              price: {
                min: args.minPrice,
                max: args.maxPrice,
                option: args.priceCurrency,
              },
            },
          },
          misc_filters: {
            filters: {
              corrupted: {
                options: args.miscFiltersCorrupted,
              },
              gem_level: {
                min: args.miscFiltersGemLvlMin,
                max: args.miscFiltersGemLvlMax,
              },
              quality: {
                min: args.miscFiltersQualityMin,
                max: args.miscFiltersQualityMax,
              },
            },
          },
        },
        status: {
          option: args.status ?? 'online',
        },
      },
      sort: {
        [args.sortBy ?? 'price']: args.sortDirection ?? 'asc',
      },
    };
  }
}
