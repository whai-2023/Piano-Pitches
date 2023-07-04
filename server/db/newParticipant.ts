import connection from './connection'
import { ParticipantData } from '../../models/Participant'

export async function addParticipant(
  newParticipant: ParticipantData,
  db = connection
): Promise<ParticipantData> {
  const { name, question, answer, audioUrl, imageUrl, key } = newParticipant

  await db('newParticipants').where('key', key).update({
    name,
    question,
    answer,
    audioUrl,
    imageUrl,
  })

  return newParticipant
}
