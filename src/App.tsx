import Footer from '@/components/Common/Footer'
import { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRouter } from './routes/Router'

function App() {
  return (
    <div>
      <Router>
        {/* <Header /> */}
        <Suspense>
          <AppRouter />
        </Suspense>
        <Footer />
      </Router>
    </div>
  )
}

export default App
