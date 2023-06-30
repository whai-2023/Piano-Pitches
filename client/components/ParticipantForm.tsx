import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { ParticipantData } from '../../models/Participant'
// import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addParticipant, getQuestions } from '../apis/apiClient'

const initialFormData = {
  name: '',
  question: '',
  answer: '',
  audioURL: '',
}

export default function ParticipantForm() {
  const [form, setForm] = useState<ParticipantData>(initialFormData)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    addParticipant(form)
    setForm(initialFormData)
  }

  useEffect(() => {
    async function getFormQuestion() {
      const responseQuestion = await getQuestions()
      console.log(responseQuestion.question)
      const question = responseQuestion.question
      const newForm = { ...form, question: question }
      setForm(newForm)
    }
    getFormQuestion()
  }, [])

  return (
    <form onSubmit={handleSubmit} aria-label="Add Participant Form">
      <p>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          id="name"
          onChange={handleChange}
          value={form.name}
          name="name"
          required
        />
      </p>

      <p>
        <label htmlFor="question">{form.question}</label>
        <br />
      </p>

      <p>
        <label htmlFor="answer">Answer:</label>
        <br />
        <input
          id="answer"
          onChange={handleChange}
          value={form.answer}
          name="answer"
          required
        />
      </p>

      <p>
        <label htmlFor="audio">Audio:</label>
        <br />
        <input
          id="audio"
          type="file"
          onChange={handleChange}
          value={form.audioURL}
          name="audio"
          required
        />
      </p>

      <button>Add Participant</button>
    </form>
  )
}
