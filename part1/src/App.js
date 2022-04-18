import { useState } from 'react'
import Numbers from './components/Numbers'

const App = () => {

  const [persons, setPersons] = useState([
    {
      name: 'Arlo Minunatu',
      number: '067495730'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber

    }
    console.log(personObject)
    let include = persons.filter(person => person.name === newName)
    if (include.length > 0) {
      window.alert('Este deja')
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
      console.log(persons)
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson} >
        <div>
          name: <input onChange={handleNameChange} />
          <div>
            number: <input onChange={handleNumberChange} />
            <button type='submit'>
              add
            </button>
          </div>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <Numbers key={person.name} person={person} />)}
      </ul>
    </div >
  )
}

export default App
