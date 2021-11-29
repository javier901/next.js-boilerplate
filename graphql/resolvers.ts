import { Country } from '../interfaces'

export const resolvers = {
  Query: {
    // countries(_parent, _args, _context, _info) {
    countries() {
      return data
    },
  },
}

const data: Country[] = [
  {
    code: 'AD',
    name: 'Andorra',
    emoji: '🇦🇩',
  },
  {
    code: 'AE',
    name: 'United Arab Emirates',
    emoji: '🇦🇪',
  },
  {
    code: 'AF',
    name: 'Afghanistan',
    emoji: '🇦🇫',
  },
  {
    code: 'AG',
    name: 'Antigua and Barbuda',
    emoji: '🇦🇬',
  },
]
