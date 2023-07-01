/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'
import {
  Participant,
  ParticipantResponse,
  ParticipantData,
} from '../../models/Participant'

import { Questions } from '../../models/questions'

// GET /api/v1/page2/:key

export async function getParticipantByKey(
  key: string
): Promise<ParticipantResponse> {
  const response = await request.get(`/api/v1/page2/${key}`)
  console.table(response.body)
  return response.body
}

/////////////////////// PAGE 3 FORM

export async function addParticipant(
  newParticipant: ParticipantData
): Promise<void> {
  const response = await request.post('/api/v1/page3').send({ newParticipant })

  return response.body.newParticipant
}

export async function getQuestions(): Promise<Questions> {
  const response = await request.get('/api/v1/page3')
  return response.body.question
}

///////////////////// CLOUDINARY /////////////////

async function getImageSignature() {
  const response = await request.get('/api/v1/page3/signature')

  const { signature, timestamp, cloudName, apiKey } = response.body
  return { signature, timestamp, cloudName, apiKey }
}

export async function uploadImage(image: File) {
  const { signature, timestamp, cloudName, apiKey } = await getImageSignature()

  const formData = new FormData()
  formData.append('file', image)
  formData.append('signature', signature)
  formData.append('timestamp', timestamp)
  formData.append('cloud_name', cloudName)
  formData.append('api_key', apiKey)

  const response = await request
    .post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`)
    .send(formData)
  const data = response.body
  return data.url
}

export async function uploadAudio(audio: File) {
  const { signature, timestamp, cloudName, apiKey } = await getImageSignature()

  const formData = new FormData()
  formData.append('file', audio)
  formData.append('signature', signature)
  formData.append('timestamp', timestamp)
  formData.append('cloud_name', cloudName)
  formData.append('api_key', apiKey)

  const response = await request
    .post(`https://api.cloudinary.com/v1_1/${cloudName}/audio/upload`)
    .send(formData)
  const data = response.body
  return data.url
}
