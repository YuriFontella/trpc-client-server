import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify'

import { router } from './router'

import fastify from 'fastify'

const server = fastify({
  maxParamLength: 5000
})

server.register(fastifyTRPCPlugin, {
  prefix: '/trpc',
  trpcOptions: {
    router
  }
})

server.listen({ port: 3000, host: '0.0.0.0' }, () => {
  console.log('Server is running')
})