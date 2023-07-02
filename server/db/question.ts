import connection from './connection'
import { Questions } from '../../models/questions'

export async function getQuestions(db = connection): Promise<Questions[]> {
  return await db('questions').select('*')
}
