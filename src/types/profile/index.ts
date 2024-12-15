import type { ProfileBio } from './bio'
import type { ProfileChecklist } from './checklist'
import type { ProfileContacts } from './contacts'
import type { ProfileCostRange } from './costRange'
import type { ProfileExpertise } from './expertise'
import type { ProfileGallery } from './gallery'
import type { ProfileServiceArea } from './serviceArea'
import type { ProfileSpecialization } from './specialization'
import type { ProfileTestimonials } from './testimonials'

export interface ProfileContent {
  gallery?: ProfileGallery[]
  bio?: ProfileBio
  specialization?: ProfileSpecialization
  expertise?: ProfileExpertise
  checklist?: ProfileChecklist
  costRange?: ProfileCostRange
  testimonials?: ProfileTestimonials
  serviceArea?: ProfileServiceArea
  contacts?: ProfileContacts
}
