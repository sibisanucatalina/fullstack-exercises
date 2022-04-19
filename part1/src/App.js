import { useEffect, useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import axios from 'axios'

const App = () => {

  const [persons, setPersons] = useState([
    // { name: 'Arto Hellas', number: '040-123456', id: 1 },
    // { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    // { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    // { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
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

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }

  useEffect(hook, [])
  console.log('render', persons.length, 'persons')

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filtered={filtered} onChange={filterByName} />
      <h3>add a new person</h3>
      <PersonForm onSubmit={addPerson} onChangeName={handleNameChange} onChangeNumber={handleNumberChange} />
      <h3>Numbers</h3>
      <Persons peopleToShow={peopleToShow} />
    </div >
  )
}

export default App
