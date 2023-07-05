// @vitest-environment jsdom
import userEvent from '@testing-library/user-event'
import nock from 'nock'
import { describe, expect, it } from 'vitest'
import { screen, waitFor, within } from '@testing-library/react'
import { renderRoute } from '../../test/utils'

describe('Add Participant Form', () => {
  it('should successfully add a new participant', async () => {
    renderRoute('/BecomeASinger')

    nock('http://localhost')
      .get('/api/v1/newParticipant/availableKeys')
      .reply(200, {
        key: [
          {
            id: '1',
            key: 'E4',
            name: '',
          },
          {
            id: '2',
            key: 'C2',
            name: '',
          },
        ],
      })

    nock('http://localhost')
      .get('/api/v1/newParticipant')
      .reply(200, {
        question: {
          question: '',
        },
      })

    const scope = nock('http://localhost')
      .post('/api/v1/newParticipant', {
        newParticipant: [
          {
            key: 'E4',
            name: 'Dallin',
            audioURL: 'E4.mp3',
            question:
              '"If you could be any fictional character for a day, who would you choose and why?"',
            answer: '"Scooby Doo, because he was my childhood hero."',
            image: 'dallin.png',
          },
        ],
      })
      .reply(200, {
        newParticipant: [
          {
            key: 'E4',
            name: 'Dallin',
            audioURL: 'E4.mp3',
            answer: '"Scooby Doo, because he was my childhood hero."',
            image: 'dallin.png',
          },
        ],
      })

    const form = await screen.findByRole('form', {
      name: 'Add Participant Form',
    })

    const nameInput = within(form).getByLabelText(/Name:/)
    const answerInput = within(form).getByLabelText(/Answer:/)
    const keySelect = within(form).getByLabelText(/Choose available key:/)
    const audioInput = within(form).getByLabelText(/Audio:/)
    const imageInput = within(form).getByLabelText(/Image:/)
    const submitButton = within(form).getByRole('button', {
      name: 'Add Participant',
    })

    const user = userEvent.setup()

    await user.type(nameInput, 'Dallin')
    await user.type(
      answerInput,
      '"Scooby Doo, because he was my childhood hero."'
    )
    await user.selectOptions(keySelect, 'E4')
    await user.type(audioInput, 'E4.mp3')
    await user.type(imageInput, 'dallin.png')
    await user.click(submitButton)

    expect(submitButton).not.toBeDisabled()
    waitFor(() => {
      expect(scope.isDone()).toBeTruthy()
    })
  })
})
