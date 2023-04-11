import { useState, useRef, useEffect } from 'react'
import { sendMessage } from '../apiClient'

export default function Chat() {
  const [previousMessages, setPreviousMessages] = useState<string[]>([])
  const [message, setMessage] = useState<string>('')
  const [error, setError] = useState('')

  // Create a ref for the messages container div
  const messagesEndRef = useRef<null | HTMLDivElement>(null)

  // Scroll to bottom function
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight
    }
  }

  // Call scrollToBottom whenever previousMessages changes
  useEffect(scrollToBottom, [previousMessages])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    sendMessage(message)
      .then((data) => {
        setPreviousMessages([...previousMessages, message, data])
      })
      .catch((err) => {
        console.log(err)
        setError('Something went wrong, come back soon!')
      })
    setMessage('')
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div
          ref={messagesEndRef} // Add the ref to the messages container div
          className="messages-container"
          style={{
            maxHeight: '300px',
            overflowY: 'scroll',
            border: '1px solid red',
            padding: '1rem',
            borderRadius: '5px',
          }}
        >
          {previousMessages.map((elem, idx) => (
            <div key={idx}>
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
          placeholder="Ask me anything ..."
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
