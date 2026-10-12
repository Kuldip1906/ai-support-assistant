import { useState } from 'react'
import './App.css'

type Message = {
  id: number
  role: 'user' | 'assistant'
  content: string
}

function App() {
  const [input, setInput] = useState('')

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'assistant',
      content: 'Hello! How can I help you today?',
    },
  ])

  const handleSend = () => {
    const trimmedInput = input.trim()

    if (!trimmedInput) return

    const newMessage: Message = {
      id: Date.now(),
      role: 'user',
      content: trimmedInput,
    }

    setMessages((previousMessages) => [
      ...previousMessages,
      newMessage,
    ])

    setInput('')
  }

  return (
    <div className="chat-container">
      <header className="chat-header">
        <h1>AI Support Assistant</h1>
        <p>Your intelligent support companion</p>
      </header>

      <main className="chat-messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${
              message.role === 'user'
                ? 'user-message'
                : 'assistant-message'
            }`}
          >
            <strong>
              {message.role === 'user' ? 'You' : 'Assistant'}
            </strong>
            <p>{message.content}</p>
          </div>
        ))}
      </main>

      <form
        className="chat-input"
        onSubmit={(event) => {
          event.preventDefault()
          handleSend()
        }}
      >
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default App