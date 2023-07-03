/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'
import {
  ParticipantResponse,
  ParticipantData,
  NewParticipantResponse,
  Participant,
} from '../../models/Participant'
import { AvailableKeys } from '../../models/Keys'
import { Questions } from '../../models/Questions'
import { response } from 'express'

//////////////////// GET /api/v1/whaiPiano/:key

export async function getParticipants(): Promise<Participant[]> {
  const response = await request.get(`api/v1/whaiPiano/`)
  return response.body.participants
}

export async function getParticipantByKey(
  key: string
): Promise<ParticipantResponse> {
  const response = await request.get(`/api/v1/whaiPiano/${key}`)
  return response.body
}

export async function getParticipantsByKeys(key: string): Promise<any> {
  const response1 = await request.get(`/api/v1/whaiPiano/${key}`)
  const response2 = await request.get(`/api/v1/whaiPiano/${key}`)
  return { response1: response1.body, response2: response2.body }
}

//////////////////// GET /api/v1/playground/:key

export async function getNewParticipantByKey(
  key: string
): Promise<NewParticipantResponse> {
  const response = await request.get(`/api/v1/playground/${key}`)
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

export async function getAllAvailableKeys(): Promise<AvailableKeys[]> {
  const response = await request.get('/api/v1/availableKeys')
  return response.body.key
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
    .post(`https://api.cloudinary.com/v1_1/${cloudName}/video/upload`)
    .send(formData)
  const data = response.body
  return data.url
}
