import connection from './connection'
import { ParticipantData } from '../../models/Participant'

export async function addParticipant(
  newParticipant: ParticipantData,
  db = connection
): Promise<ParticipantData> {
  const { name, question, answer, audioUrl, imageUrl } = newParticipant

  const vacantParticipant = await db('newParticipants')
    .whereNotNull('key')
    .where({ name: '' })
    .first()

  if (vacantParticipant) {
    await db('newParticipants').where({ id: vacantParticipant.id }).update({
      name,
      question,
      answer,
      audioUrl,
      imageUrl,
    })
    return vacantParticipant
  } else {
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
}
