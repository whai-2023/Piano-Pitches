import connection from './connection'
import { Participant } from '../../models/Participant'

//PAGE 2 DB FUNCTIONS HERE
export async function getParticipants(db = connection): Promise<Participant[]> {
  return db('participants').select('*')
}

export function getParticipantByKey(key: string, db = connection) {
  return db<Participant>('participants')
    .where('key', '=', key)
    .select()
    .then((participants) => {
      console.log(`Participiant with kay (${key}):`, participants)
      return participants[0]
    })
    .catch((error) => {
      console.error('Error fetching participant by key:', error)
      throw error
    })
}
