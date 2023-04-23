import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import BaseLayout from './components/BaseLayout/BaseLayout.js'
import Country from './pages/Country/Country.js'
import MostExpensive from './pages/MostExpensive/MostExpensive.js'

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route
              element={<BaseLayout><Home /></BaseLayout>}
              path='/'
            />
            <Route
              element={<BaseLayout><MostExpensive /></BaseLayout>}
              path='/top-expensive'
            />
            <Route
              element={<BaseLayout><Country /></BaseLayout>}
              path='/:country'
            />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
