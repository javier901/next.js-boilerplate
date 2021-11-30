export const resolvers = {
  Query: {
    users: (_parent, _args, ctx) => {
      return ctx.prisma.user.findMany()
    },
  },
}
