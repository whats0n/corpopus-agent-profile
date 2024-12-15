export interface ProfileContactsLink {
  href: string
  text: string
}

export interface ProfileContactsCard {
  title: string
  text: string
  link: ProfileContactsLink
}

export interface ProfileContacts {
  title?: string
  meta?: string
  avatar?: string
  name?: string
  position?: string
  description?: string
  chat?: ProfileContactsCard
  call?: ProfileContactsCard
}
