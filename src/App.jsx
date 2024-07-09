import './App.css'
import { Mycomponet } from './components/Mycomponet'
import { SecondComponet } from './components/SecondComponet'

function App() {
  const name = 'Felipe Maza'
  return (
    <>
    <di>
      <h1>Aja Padre ? </h1>
      <Mycomponet name={name}/>
      <hr /> 
      <h4>Segundo componente</h4>
      <SecondComponet />
    </di>
    </>
  )
}

export default App
