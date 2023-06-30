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

export async function addParticipant(
  participantData: ParticipantData
): Promise<void> {
  await request.post('/api/v1/page3')
  //console.table(response.body)
  //return response.body
}

export async function getQuestions(): Promise<Questions> {
  const response = await request.get('/api/v1/page3')
  return response.body.question
}
