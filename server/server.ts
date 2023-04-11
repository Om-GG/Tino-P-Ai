import { join } from 'node:path'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import chatgpt from './routes/chatgpt'

const server = express()

server.use(cors())
server.use(bodyParser.json())
server.use(express.json())
server.use(express.static(join(__dirname, './public')))

server.use('/api/v1/gpt', chatgpt)

export default server
