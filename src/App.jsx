import './App.css'


import Header from './components/Header/Header'
import LeftMenu from './components/Header/LeftMenu'
import Main from './components/Main/Main'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <Main />
    </div>
  )
}

export default App
