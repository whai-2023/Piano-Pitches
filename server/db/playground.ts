import connection from './connection'
import { Participant } from '../../models/Participant'

export function getNewParticipantByKey(key: string, db = connection) {
  return db<Participant>('newParticipants')
    .where('key', '=', key)
    .select()
    .then((newParticipants) => {
      console.log(`Participiant with key: (${key}):`, newParticipants)
      return newParticipants[0]
    })
    .catch((error) => {
      console.error('Error fetching new participant by key:', error)
      throw error
    })
}
