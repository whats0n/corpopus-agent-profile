export interface SampleTableRow {
  id: number
  title: string
  meta: string
  content: string[]
}

export interface SampleTabContent {
  id: string
  label: string
  value: string
}

export interface SampleTab extends Omit<SampleTableRow, 'content'> {
  content: SampleTabContent[]
}
