import type { ProfileBio } from './bio'
import type { ProfileChecklist } from './checklist'
import type { ProfileCostRange } from './costRange'
import type { ProfileExpertise } from './expertise'
import type { ProfileGallery } from './gallery'
import type { ProfileSpecialization } from './specialization'
import type { ProfileTestimonials } from './testimonials'

export interface ProfileContent {
  seo: {
    title: string
    description: string
  }
  gallery?: ProfileGallery[]
  bio?: ProfileBio
  specialization?: ProfileSpecialization
  expertise?: ProfileExpertise
  checklist?: ProfileChecklist
  costRange?: ProfileCostRange
  testimonials?: ProfileTestimonials
  contacts?: {
    title: string
    description: string
  }
}
