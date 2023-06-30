import connection from './connection'
import { Questions } from '../../models/questions'

//PAGE 3 DB FUNCTIONS HERE
export async function getQuestions(db = connection): Promise<Questions[]> {
  return await db('questions').select('*')
}
