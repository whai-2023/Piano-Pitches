import connection from './connection'
import { Participant } from '../../models/Participant'

//PAGE 2 DB FUNCTIONS HERE
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
      console.log(`Participiant with key: (${key}):`, participants)
      return participants[0]
    })
    .catch((error) => {
      console.error('Error fetching participant by key:', error)
      throw error
    })
}
