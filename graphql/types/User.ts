import { objectType, extendType, nonNull } from 'nexus'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.id('code')
    t.nonNull.string('name')
    t.string('emoji')
  },
})

export const UsersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('users', {
      type: nonNull('User'),
      resolve(_parent, _args, ctx) {
        return ctx.prisma.user.findMany()
      },
    })
  },
})
