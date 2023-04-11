import Chat from './Chat'

function App() {
  return (
    <div
      className="is-flex is-flex-direction-column"
      style={{ minHeight: '100vh' }}
    >
      <div className="columns" style={{ flexGrow: 1 }}>
        <div className="column pb-6"></div>
        <div className="column is-half">
          <h1 className="has-text-centered is-size-2 mt-4">Tino P-Ai</h1>
          <h2 className="has-text-centered is-size-6 mb-4">
            Ko whakawhanake āwhina e whakahaere ana e AI
          </h2>
          <Chat />
        </div>
        <div className="column"></div>
      </div>
      <div>
        <footer className="has-text-centered mt-4 p-4">
          <div>&copy; Tino P-Ai 2023</div>
          <div>
            Full Disclaimer: Make sure to check our answers, we are all
            learning!.
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
