import type { ProfileBio } from './bio'
import type { ProfileChecklist } from './checklist'
import type { ProfileCostRange } from './costRange'
import type { ProfileExpertise } from './expertise'
import type { ProfileGallery } from './gallery'
import type { ProfileSpecialization } from './specialization'

export interface ProfileContent {
  gallery?: ProfileGallery[]
  bio?: ProfileBio
  specialization?: ProfileSpecialization
  expertise?: ProfileExpertise
  checklist?: ProfileChecklist
  costRange?: ProfileCostRange
}
