import { useState, useRef, useEffect, useCallback } from 'react'
import { sendMessage } from '../apiClient'

export default function Chat() {
  const [previousMessages, setPreviousMessages] = useState<string[]>([])
  const [message, setMessage] = useState<string>('')
  const [error, setError] = useState('')

  const messagesEndRef = useRef<null | HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight
    }
  }

  useEffect(scrollToBottom, [previousMessages, scrollToBottom])

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      setPreviousMessages([...previousMessages, message])

      try {
        const data = await sendMessage(message)
        setPreviousMessages((prevMessages) => [...prevMessages, data])
      } catch (err) {
        console.log(err)
        setError('Something went wrong, come back soon!')
      }
      setMessage('')
    },
    [previousMessages, message]
  )

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div ref={messagesEndRef} className="messagesContainer">
          {previousMessages.map((elem, idx) => (
            <div className='message' key={idx}>
              {elem}
              <br />
              <br />
            </div>
          ))}
        </div>
        <input
          className="input is-danger is-medium"
          type="text"
          value={message}
          placeholder="Ask me anything..."
          onChange={(e) => setMessage(e.target.value)}
        ></input>
        <div className="">
          <button className="button is-fullwidth is-black mt-2" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
