/* React Components */ 
import { BrowserRouter, Route, Routes } from 'react-router-dom'

/* Project Components */
import Signup from './components/Registration/Signup'

/* 3-rd party components */
import { ChakraProvider } from "@chakra-ui/react"



function App() {

  return (
   
    <ChakraProvider>

      <BrowserRouter>

        <Routes>

          <Route path='/signup' element={<Signup />} />

        </Routes>
      
      </BrowserRouter>

       
    </ChakraProvider>

  )
}

export default App
