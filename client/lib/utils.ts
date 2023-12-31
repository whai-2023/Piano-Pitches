import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export default function getRandomColour() {
  const letters = '0123456789ABCDEF'
  let colour = '#'
  for (let i = 0; i < 6; i++) {
    colour += letters[Math.floor(Math.random() * 16)]
  }
  return colour
}
