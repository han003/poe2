export default interface SearchRequest {
  name: string;
  type: string;
  tradeFiltersDisabled: boolean;
  miscFiltersCorrupted: boolean;
  miscFiltersGemLvlMin: number;
  miscFiltersGemLvlMax: number;
  miscFiltersQualityMin: number;
  miscFiltersQualityMax: number;
  status: string;
  sortBy: string;
  sortDirection: string;
}
