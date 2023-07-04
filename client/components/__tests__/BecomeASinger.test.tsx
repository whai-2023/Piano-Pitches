// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { renderRoute, screen } from '../../test/utils'

describe('<Navigation>', () => {
  it('renders navigation links', async () => {
    renderRoute('/BecomeASinger')

    const links = await screen.findAllByRole('link')

    links.forEach((link) => {
      expect(link).toBeTruthy()
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
