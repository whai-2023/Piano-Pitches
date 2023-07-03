/* eslint-disable react-hooks/exhaustive-deps */
import 'notyf/notyf.min.css'
import { useNavigate } from 'react-router-dom'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { ParticipantData } from '../../models/Participant'
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query'
import {
  addParticipant,
  getQuestions,
  uploadImage,
  uploadAudio,
  getAllAvailableKeys,
} from '../apis/apiClient'
import { Notyf } from 'notyf'

const initialFormData = {
  name: '',
  question: '',
  key: '',
  answer: '',
  audioUrl: '',
  imageUrl: '',
}

export default function ParticipantForm() {
  const [form, setForm] = useState<ParticipantData>(initialFormData)
  const queryClient = useQueryClient()
  const [imageSelected, setImageSelected] = useState<File | null>(null)
  const [audioSelected, setAudioSelected] = useState<File | null>(null)
  const [isAudioError, setIsAudioError] = useState(false)
  const [isImageError, setIsImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const notyf = new Notyf({
    dismissible: false,
    position: {
      x: 'center',
      y: 'center',
    },
    types: [
      {
        type: 'success',
        background: 'rgb(202, 61, 202)',
      },
    ],
  })

  const addParticipantMutation = useMutation(addParticipant, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['participant'])
    },
  })

  const availableKeysQuery = useQuery(['availableKeys'], getAllAvailableKeys)

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setIsLoading(true)

    if (imageSelected && audioSelected) {
      const imageUrl = await uploadImage(imageSelected)
      const audioUrl = await uploadAudio(audioSelected)

      addParticipantMutation.mutate({ ...form, imageUrl, audioUrl })
    } else {
      addParticipantMutation.mutate({ ...form })
    }

    setIsLoading(false)
    notyf.success('Form Submitted Successfully. Time to sing!')
    setTimeout(() => {
      navigate('/Playground')
    }, 2400)
  }

  useEffect(() => {
    async function getFormQuestion() {
      const responseQuestion = await getQuestions()
      const question = responseQuestion.question
      const newForm = { ...form, question: question }
      setForm(newForm)
    }
    getFormQuestion()
  }, [])

  if (addParticipantMutation.isError) {
    return <div>There was an error trying to add your form</div>
  }

  if (availableKeysQuery.isError) {
    return <div>There was an error trying to get your available keys</div>
  }

  function validateAudioType(file: File): boolean {
    const allowedExtensions = ['.mp3', '.wav', '.m4a']
    const fileName = file.name
    const fileExtension = fileName
      .substring(fileName.lastIndexOf('.'))
      .toLowerCase()
    return allowedExtensions.includes(fileExtension)
  }

  function validateImageType(file: File): boolean {
    const allowedExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.bmp']
    const fileName = file.name
    const fileExtension = fileName
      .substring(fileName.lastIndexOf('.'))
      .toLowerCase()
    return allowedExtensions.includes(fileExtension)
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Add Participant Form">
      <div>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          id="name"
          onChange={handleChange}
          value={form.name}
          name="name"
          required
        />
      </div>

      <div>
        <label htmlFor="question">{form.question}</label>
        <br />
        <input
          id="question"
          type="hidden"
          value={form.question}
          name="question"
        />
      </div>

      <div>
        <label htmlFor="answer">Answer:</label>
        <br />
        <input
          id="answer"
          onChange={handleChange}
          value={form.answer}
          name="answer"
          required
        />
      </div>

      <div>
        <label htmlFor="key">Choose available key:</label>
        <br />
        <select
          id="key"
          onChange={handleChange}
          value={form.key}
          name="key"
          required
        >
          <option value="" disabled selected>
            Choose a key
          </option>
          {availableKeysQuery.data?.map((key) => (
            <option key={key.key} value={key.key}>
              {key.key}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="audioUrl">Audio:</label>
        <p>(Please avoid any white space before recording.)</p>
        <br />
        <div className="file-upload-button">
          <input
            type="file"
            id="audioUrl"
            name="audioUrl"
            onChange={(event) => {
              const files = event.target.files
              if (files && files.length > 0) {
                const selectedFile = files[0]
                if (validateAudioType(selectedFile)) {
                  setAudioSelected(selectedFile)
                  setIsAudioError(false)
                } else {
                  setIsAudioError(true)
                }
              }
            }}
            required
          />
          {isAudioError && (
            <div style={{ color: 'red' }}>
              Please select an MP3, M4A, or WAV file for the audio.
            </div>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="imageUrl">Image:</label>
        <br />
        <div className="file-upload-button">
          <input
            type="file"
            id="imageUrl"
            name="imageUrl"
            onChange={(event) => {
              const files = event.target.files
              if (files && files.length > 0) {
                const selectedFile = files[0]
                if (validateImageType(selectedFile)) {
                  setImageSelected(selectedFile)
                  setIsImageError(false)
                } else {
                  setIsImageError(true)
                }
              }
            }}
            required
          />
          {isImageError && (
            <div style={{ color: 'red' }}>
              Please select a PNG, JPEG, GIF, or BMP image file.
            </div>
          )}
        </div>
      </div>

      <button disabled={isAudioError || isImageError}>Add Participant</button>
      {isLoading && <div>Submitting...</div>}
    </form>
  )
}
