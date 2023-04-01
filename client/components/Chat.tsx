import { useState } from 'react'

// fetch, superagent, axios

export default function Chat() {
  // { text: string, author: 'me' | 'gpt', id: number, timestamp: number }

  const [previousMessages, setPreviousMessages] = useState<
    { content: string; role: string }[]
  >([])
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setPreviousMessages([
      ...previousMessages,
      { content: message, role: 'user' },
    ])
    fetch('http://localhost:3000/api/v1/gpt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [...previousMessages, { content: message, role: 'user' }],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setPreviousMessages([
          ...previousMessages,
          { content: message, role: 'user' },
          { content: data.completion.content, role: 'assistant' },
        ])
        setResponse(data.completion.content)
      })
      // .finally(() => setMessage(''))
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
        <textarea
          className="textarea is-danger is-medium"
          value={previousMessages.map((elem) => `${elem.content}\n\n`)}
          // {previousMessages.map((msg, idx) => (
          //   <div key={idx} className={`message message--${msg.role}`}>
          //     <div className="message__text">{msg.content}</div>
          //   </div>
          // ))}
          placeholder=""
          rows={12}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <input
          className="input is-danger is-medium"
          type="text"
          value={message}
          placeholder="Ask me anything ..."
          onChange={(e) => setMessage(e.target.value)}
        ></input>
        <div className="">
          <button className="button is-fullwidth is-danger mt-2" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
