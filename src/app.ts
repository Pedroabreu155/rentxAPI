import express from  'express'

const app = express()

app.get('/', (_, response) => response.json({ message: 'Hello World!'}) )

export { app }
