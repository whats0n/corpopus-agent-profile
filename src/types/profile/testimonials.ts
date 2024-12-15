export interface ProfileTestimonialsMetric {
  name: string
  value: string
}

export interface ProfileTestimonialsCard {
  avatar: string
  name: string
  address: string
  stars: number
  comment: string
}

export interface ProfileTestimonials {
  title?: string
  metrics?: ProfileTestimonialsMetric[]
  cards?: ProfileTestimonialsCard[]
}
