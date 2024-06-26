export default async function routes(fastify, options) {
    fastify.get('/greet', async (request, reply) => {
        return { greeting: 'Hello from another route! 🤭 ' };
    });
}