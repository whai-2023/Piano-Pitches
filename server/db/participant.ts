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
