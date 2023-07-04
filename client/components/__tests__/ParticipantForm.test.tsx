// @vitest-environment jsdom
import userEvent from '@testing-library/user-event'
import nock from 'nock'
import { describe, expect, it } from 'vitest'

import {
  renderRoute,
  screen,
  waitForElementToBeRemoved,
  within,
} from '../../test/utils'

describe('<ParticipantForm>', () => {
  it('renders BecomeASinger page', () => {
    renderRoute('/BecomeASinger')

    expect(screen.getByText(/Piano Pitch - Become A Singer/i)).toBeTruthy()
  })
})

describe('form', () => {
  it('should successfully add a new participant', async () => {
    renderRoute('/BecomeASinger')

    const scope1 = nock('http://localhost')
      .post('/api/v1/newParticipant', {
        newParticipant: [
          {
            key: 'C2',
            name: 'Dallin',
            audioURL: '/audio/C2.mp3',
            question:
              '"If you could be any fictional character for a day, who would you choose and why?"',
            answer: '"Scooby Doo, because he was my childhood hero."',
            image: '/image/dallin.png',
          },
        ],
      })
      .reply(200, {
        newParticipant: [
          {
            key: 'C2',
            name: 'Dallin',
            audioURL: 'C2.mp3',
            answer: '"Scooby Doo, because he was my childhood hero."',
            image: 'dallin.png',
          },
        ],
      })

    // const scope2 = nock('http://localhost')
    //   .get('/api/v1/playground/C2')
    //   .reply(200, {
    //     pet: [
    //       {
    //         key: 'C2',
    //         name: 'Dallin',
    //         audioURL: 'C2.mp3',
    //         answer: '"Scooby Doo, because he was my childhood hero."',
    //         image: 'dallin.png',
    //       },
    //     ],
    //   })

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
    await user.type(keySelect, 'C2')
    await user.type(audioInput, 'C2.mp3')
    await user.type(imageInput, 'dallin.png')
    await user.click(submitButton)

    await waitForElementToBeRemoved(() =>
      screen.getByRole('form', { name: 'Add Participant' })
    )

    expect(scope1.isDone()).toBeTruthy()
    // expect(scope2.isDone()).toBeTruthy()
  })
})
