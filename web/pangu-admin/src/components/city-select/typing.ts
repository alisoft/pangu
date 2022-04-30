export interface CitySelectProps {
  province?: GeographicItemType[];
  city?: GeographicItemType[];
  loading?: boolean;
}

export interface GeographicItemType {
  name: string;
  id: string;
}

export interface GeographicType {
  province: GeographicItemType;
  city: GeographicItemType;
}
