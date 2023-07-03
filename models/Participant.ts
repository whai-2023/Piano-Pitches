export interface Participant {
  id: number
  key: string
  name: string
  audioURL: string
  question: string
  answer: string
  image: string
}

export interface ParticipantResponse {
  participant: Participant
}

export interface ParticipantData {
  name: string
  audioUrl: string
  question: string
  key: string
  answer: string
  imageUrl: string
}

export interface NewParticipant {
  id: number
  key: string
  name: string
  audioUrl: string
  question: string
  answer: string
  imageUrl: string
}
export interface NewParticipantResponse {
  newParticipant: NewParticipant
}
