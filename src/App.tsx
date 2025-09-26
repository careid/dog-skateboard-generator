import './App.css'

function App() {
  return (
    <div className="app">
      <img 
        src="https://placedog.net/500/500" 
        alt="Dog on a skateboard"
        style={{
          maxWidth: '500px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}
      />
    </div>
  )
}

export default App