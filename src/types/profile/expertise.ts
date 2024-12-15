export interface ProfileExpertiseContentItem {
  percent: number
  title: string
  description: string
}

export interface ProfileExpertise {
  title?: string
  content?: ProfileExpertiseContentItem[]
}
