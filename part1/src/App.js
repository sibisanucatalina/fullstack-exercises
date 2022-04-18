import { useState } from 'react'
import Numbers from './components/Numbers'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newId, setNewId] = useState(5)
  const [filtered, setFiltered] = useState('')


  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: newId
    }
    console.log(personObject)
    let include = persons.filter(person => person.name === newName)
    if (include.length > 0) {
      window.alert('Este deja')
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
      setNewId(newId + 1)
      console.log(newId)
      console.log(persons)
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const filterByName = (event) => {
    setFiltered(event.target.value)
  }

  const peopleToShow = filtered !== ''
    ? persons.filter(person => person.name.toLowerCase().includes(filtered.toLowerCase()))
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with
        <input onChange={filterByName} />
      </div>
      <h2>add a new person</h2>
      <form onSubmit={addPerson} >
        <div>
          name: <input onChange={handleNameChange} />
          <div>
            number: <input onChange={handleNumberChange} />
          </div>
          <button type='submit'>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {peopleToShow.map(person => <Numbers key={person.id} person={person} />)}
      </ul>
    </div >
  )
}

export default App
