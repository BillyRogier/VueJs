export interface Product {
  id: string
  label: string
  description: string
  qte: number
}

export interface RegistrationForm {
  nom: string
  prenom: string
  email: string
  sexe: string
  adresse: string
  codePostal: string
  ville: string
  institut: string
}
