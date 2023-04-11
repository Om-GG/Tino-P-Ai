import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

//  GET /gpt/chat/:text
export async function sendMessage(input: string): Promise<string> {
  const response = await request.post(`${serverURL}/gpt`).send({ input })
  return response.body.completion.response
}
