import { ChatOpenAI } from 'langchain/chat_models'
import {
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
  ChatPromptTemplate,
  MessagesPlaceholder,
} from 'langchain/prompts'

import { ConversationChain } from 'langchain/chains'
import { BufferMemory } from 'langchain/memory'

import * as dotenv from 'dotenv'

dotenv.config()

const chat = new ChatOpenAI({
  temperature: 0.7,
})

const chatPrompt = ChatPromptTemplate.fromPromptMessages([
  SystemMessagePromptTemplate.fromTemplate(
    `The following is a friendly conversation between a human and an AI.
     The AI is talkative and provides lots of specific details from its context.
     If the AI does not know the answer to a question, it truthfully says it does not know.`
  ),
  new MessagesPlaceholder('history'),
  HumanMessagePromptTemplate.fromTemplate('{input}'),
])

const chain = new ConversationChain({
  memory: new BufferMemory({ returnMessages: true, memoryKey: 'history' }),
  prompt: chatPrompt,
  llm: chat,
})

const chatAsync = async (message: string) => {
  const response = await chain.call({
    input: `${message}`,
  })

  return response
}

// console.log(chatAsync('Hi I am david'))
// console.log(chatAsync('What is my name?'))
export default chatAsync
