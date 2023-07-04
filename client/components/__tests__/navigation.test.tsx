// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { renderRoute, screen } from '../../test/utils'

describe('Navigation', () => {
  it('renders navigation links', () => {
    renderRoute('/')

    const links = screen.getAllByRole('link')

    links.forEach((link) => {
      expect(link).toBeTruthy()
    })

    expect(links.map((link) => link.textContent)).toMatchInlineSnapshot(`
      Array [
        "Play Piano",
        "Become A Singer",
        "Playground",
      ]
    `)
  })

  it('navigates to the correct routes when clicked', () => {
    renderRoute('/')

    const playPianoLink = screen.getByText('Play Piano')
    const becomeASingerLink = screen.getByText('Become A Singer')
    const playgroundLink = screen.getByText('Playground')

    expect(playPianoLink.href).toBe('http://localhost/WhaiPiano') // Use href property to check the value of the href attribute
    expect(becomeASingerLink.href).toBe('http://localhost/BecomeASinger')
    expect(playgroundLink.href).toBe('http://localhost/Playground')
  })
})
