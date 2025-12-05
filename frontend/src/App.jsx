import { useUser } from '@clerk/clerk-react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import HomePage from './pages/HomePage'
import ProblemsPage from './pages/ProblemsPage'

function App() {
  const { isSignedIn } = useUser();

  return (
    <>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/problems' element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />} />
      </Routes>

      <Toaster toastOptions={{ duration: 3000}} />
    </>
  )
}

export default App
