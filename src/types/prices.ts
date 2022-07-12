export interface SinglePriceType {
  date: string;
  value: number;
}

export interface PricesType {
  prices?: SinglePriceType[];
}
