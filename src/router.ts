import { initTRPC } from '@trpc/server'

import { z } from 'zod'

export const trpc = initTRPC.create()

export const router = trpc
  .router({
    getUsers: trpc.procedure
      .output(z.array(z.object({ name: z.string() })))
      .query(() => {
        return [{ name: 'Yuri' }]
      }),

    getUser: trpc.procedure
      .input(z.object({ name: z.string() }))
      .query(({ input }) => {
        return { name: input }
      })
  })

export type AppRouter = typeof router