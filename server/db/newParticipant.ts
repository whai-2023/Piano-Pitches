import connection from './connection'
import { ParticipantData } from '../../models/Participant'

export async function addParticipant(
  newParticipant: ParticipantData,
  db = connection
): Promise<ParticipantData> {
  const { name, question, answer, audioUrl, imageUrl } = newParticipant
  const [insertedParticipant] = await db('newParticipants')
    .insert({
      name,
      question,
      answer,
      audioUrl,
      imageUrl,
    })
    .returning(['name', 'question', 'answer', 'audioUrl', 'imageUrl'])

  return insertedParticipant
}
