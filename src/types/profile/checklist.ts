export interface ProfileChecklistItem {
  icon: string
  title: string
}

export interface ProfileChecklist {
  title?: string
  items?: ProfileChecklistItem[]
}
