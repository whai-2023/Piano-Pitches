import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { ParticipantData } from '../../models/Participant'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
  addParticipant,
  getQuestions,
  uploadImage,
  uploadAudio,
} from '../apis/apiClient'
import { useToast } from './ui/use-toast'
import { Notyf } from 'notyf'

const initialFormData = {
  name: '',
  question: '',
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
  const { toast } = useToast()

  const notyf = new Notyf({
    duration: 1500,
    dismissible: false,
    position: {
      x: 'center',
      y: 'center',
    },
    types: [
      {
        type: 'success',
        background: 'rgb(202, 61, 202)',
        icon: {
          className: 'fas fa-check',
          tagName: 'span',
          color: '#ffffff',
        },
      },
    ],
  })

  const addParticipantMutation = useMutation(addParticipant, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['participant'])
    },
  })

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (imageSelected && audioSelected) {
      const imageUrl = await uploadImage(imageSelected)
      const audioUrl = await uploadAudio(audioSelected)

      addParticipantMutation.mutate({ ...form, imageUrl, audioUrl })
    } else {
      addParticipantMutation.mutate({ ...form })
    }

    setForm(initialFormData)

    // toast({
    //   promise: new Promise<void>((resolve) => {
    //     resolve();
    //   }),
    //   pending: 'Submitting Form',
    //   success: 'Form Submitted Successfully',
    //   error: 'Error when submitting form',
    // });

    notyf.success('Form Submitted Successfully')
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

  if (addParticipantMutation.isError) {
    return <div>There was an error trying to add your form</div>
  }

  if (addParticipantMutation.isLoading) {
    return <div>Adding your form</div>
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
        <label htmlFor="audio">Audio:</label>
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
        <label htmlFor="image">Image:</label>
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
    </form>
  )
}
