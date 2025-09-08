import { useState } from 'react'
import Navbar from './webpage/Navbar'
import Card from './webpage/Card'
import Loved from './Loved'
import Banner from './webpage/banner'
import Media from './webpage/Media'
import Footer from './Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Card/>
    <Loved/>
    <Banner/>
    <Media/>
    <Footer/>
    </>
  )
}

export default App
