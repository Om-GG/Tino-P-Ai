import express from 'express'

import chatAsync from './configChat'

const router = express.Router()

router.post('/', async (req, res) => {
  const { input } = req.body
  try {
    const completion = await chatAsync(input)

    res.json({
      completion,
    })
  } catch (err) {
    res.status(500).send(err != null && (err as Error).message)
  }
})

export default router
