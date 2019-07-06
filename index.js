'use strict'

const Hapi = require('@hapi/hapi')
const Path = require('path')

const start = async () => {
  const server = Hapi.server({
    port: '3000',
    host: 'localhost'
  })

  await server.register(require('@hapi/inert'))

  server.route({
    method: 'GET',
    path: '/{p*}',
    handler: {
      directory: {
        path: Path.join(__dirname, 'public')
      }
    }
  })

  await server.start();

  console.log('Server running at: ', server.info.uri)
}

start();
