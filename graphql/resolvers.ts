export const resolvers = {
  Query: {
    countries: (_parent, _args, ctx) => {
      return ctx.prisma.country.findMany()
    },
  },
}
