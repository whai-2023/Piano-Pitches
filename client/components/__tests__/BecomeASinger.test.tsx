// @vitest-environment jsdom
import { describe, expect, it, beforeEach } from 'vitest'
import { renderRoute } from '../../test/utils'
import { screen } from '@testing-library/react'
import nock from 'nock'

beforeEach(async () => {
  nock('http://localhost')
    .get('/api/v1/newParticipant')
    .reply(200, {
      question: {
        question: '',
      },
    })
})

describe('<ParticipantForm>', () => {
  it('renders BecomeASinger page', () => {
    renderRoute('/BecomeASinger')

    expect(
      screen.getByText(/Piano Pitch - Become A Singer/i)
    ).toBeInTheDocument()
  })
})

describe('<Navigation>', () => {
  it('renders navigation links', async () => {
    renderRoute('/BecomeASinger')

    const links = await screen.findAllByRole('link')

    links.forEach((link) => {
      expect(link).toBeInTheDocument()
    })

    expect(links.map((link) => link.textContent)).toMatchInlineSnapshot(`
      [
        "Home",
        "Whai Piano",
      ]
    `)
  })
})

it('navigates to the correct routes when clicked', () => {
  renderRoute('/BecomeASinger')

  const homeLink = screen.getAllByRole('link', {
    name: 'Home',
  })
  const playPianoLink = screen.getAllByRole('link', { name: 'Whai Piano' })

  expect(homeLink[0].getAttribute('href')).toBe('/')
  expect(playPianoLink[0].getAttribute('href')).toBe('/WhaiPiano')
})
