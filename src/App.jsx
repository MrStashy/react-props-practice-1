import { useState } from 'react'
import { reverse } from './helpers'
import Title from './Title'
import Length from './Length'
import NameReversed from './NameReversed'


function App() {
  const [name, setName] = useState('William Baxter')

  return (
    <div className="app">
      <Title name={name} />
      <Length name={name} />
      <NameReversed reverse={reverse} name={name} />
    </div>
  )
}

export default App
