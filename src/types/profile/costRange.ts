export interface ProfileCostRangeItem {
  title: string
  value: string
}

export interface ProfileCostRangeTab {
  title: string
  items: ProfileCostRangeItem[]
}

export interface ProfileCostRange {
  title?: string
  leftTab?: ProfileCostRangeTab
  rightTab?: ProfileCostRangeTab
}
