/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'
import { Participant, ParticipantResponse } from '../../models/Participant'

// GET /api/v1/page2/:key

export async function getParticipantByKey(
  key: string
): Promise<ParticipantResponse> {
  const response = await request.get(`/api/v1/page2/${key}`)
  console.table(response.body)
  return response.body
}
