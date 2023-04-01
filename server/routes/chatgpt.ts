import express from 'express'
import openai from './configChat'

const router = express.Router()

router.post('/', async (req, res) => {
  const { messages } = req.body
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'You are DavidGPT, a helpful assistant coding and development chatbot',
        },
        ...messages,
      ],
      temperature: 0.7,
    })
    const completion = response.data.choices[0].message

    res.json({
      completion,
    })
  } catch (err) {
    res.status(500).send(err != null && (err as Error).message)
  }
})

export default router
