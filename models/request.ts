export interface RequestChatCompletion {
  model: string
  messages: string
}

export interface CreateChatCompletionRequest {
  model: string
  messages: ChatCompletionRequestMessage[]
}

export interface ChatCompletionRequestMessage {
  role: string
  content: string
}
