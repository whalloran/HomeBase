import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './views/Dashboard/Dashboard'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <div className="app-body">
        <Sidebar />
        <main className="app-main">
          <Dashboard />
        </main>
      </div>
    </div>
  )
}

export default App
