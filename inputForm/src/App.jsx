import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SignupForm from './components/Signup-Form/SignupForm'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <SignupForm />

    </>
  )
}


export default App
