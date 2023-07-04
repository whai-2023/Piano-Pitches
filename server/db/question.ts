import connection from './connection'
import { Questions } from '../../models/Questions'

export async function getQuestions(db = connection): Promise<Questions[]> {
  return await db('questions').select('*')
}
