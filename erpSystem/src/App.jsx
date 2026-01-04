import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Application from './components/Application'
import ChatBox from './components/ChatBox'


function App() {
  const [view, setView] = useState('Dashboard')

  const handleCardClick = (cardName) => {
    setView(cardName);
  };

  return (
    <>
      {view === 'Dashboard' && (
        <Dashboard clicked={handleCardClick} />
      )}

      {view === 'Application' && (
        <Application back={() => setView('Dashboard')} />
      )}
      {view === 'ChatBox' && (
        <ChatBox back={() => setView('Dashboard')} />
      )}
    </>
  )
}

export default App
