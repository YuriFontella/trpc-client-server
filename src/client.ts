import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'

import { AppRouter } from './router'

const main = async () => {

  const client = createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url: 'http://localhost:3000/trpc',
      }),
    ],
  })

  const users = await client.getUsers.query()

  console.log(users)

}

main()
