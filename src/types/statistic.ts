export interface StatisticFullData {
  theme: string;
  complexity: any[];
  format: { _count: number; name: string }[];
  organizer: { _count: number; name: string }[];
  place: { _count: number; name: string }[];
  payment: { _count: number; name: string }[];
  type: { _count: number; name: string }[];
}

export interface StatisticThemeData {
  _count: number;
  name: string;
  description: string;
}
