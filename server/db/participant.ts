import connection from './connection'
import { Participant } from '../../models/Participant'

export async function getParticipants(db = connection): Promise<Participant[]> {
  return await db('participants').select('*')
}

export async function getParticipantById(
  id: number,
  db = connection
): Promise<Participant> {
  const [participant] = await db('participants')
    .where({ id: id })
    .returning('*')
  return participant
}

export function getParticipantByKey(key: string, db = connection) {
  return db<Participant>('participants')
    .where('key', '=', key)
    .select()
    .then((participants) => {
      // we can use `.first()` instead of grabbing the first element of the array
      console.log(`Participiant with key: (${key}):`, participants)
      return participants[0]
    })
    .catch((error) => {
      console.error('Error fetching participant by key:', error)
      throw error
    })
}
