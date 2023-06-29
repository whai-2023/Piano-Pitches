import connection from './connection'
import { Participant } from '../../models/Participant'

//PAGE 2 DB FUNCTIONS HERE
export async function getParticipants(db = connection): Promise<Participant[]> {
  return db('participants').select('*')
}
