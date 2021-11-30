import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const data = [
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

async function main() {
  await prisma.user.createMany({
    data: data,
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
