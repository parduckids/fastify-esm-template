// server.js or server.mjs

import Fastify from 'fastify'
import routes from './routes.js'

const fastify = Fastify({
    logger: true
})

fastify.register(routes)

fastify.get('/', async (request, reply) => {
    return { home: 'Welcome to the fastify template!' }
})

fastify.listen({ port: 3000 }, (err, address) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    console.log(`Server is now listening on ${address}`)
})