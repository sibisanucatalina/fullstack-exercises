import { useEffect, useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filtered, setFiltered] = useState('')


  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    console.log(personObject)
    let include = persons.filter(person => person.name === newName)
    const arto = include[0]
    const copy = { ...arto, number: newNumber }
    if (include.length > 0) {
      window.confirm(` ${copy.name} is already added to the phonebook, replace the old number with a new one?`)
      personService
        .update(copy.id, copy)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== copy.id
            ? person
            : returnedPerson))
        })

    } else {

      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })

      setNewName('')
      setNewNumber('')

      console.log(persons)
    }
  }


  const doDelete = (id) => {
    const personToDelete = persons.filter(person => person.id === id)
    window.confirm(`Are you sure you want to delete ${personToDelete[0].name}?`)
    personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
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


  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={filterByName} />
      <h3>add a new person</h3>
      <PersonForm onSubmit={addPerson} onChangeName={handleNameChange} onChangeNumber={handleNumberChange} />
      <h3>Numbers</h3>
      <Persons peopleToShow={peopleToShow} onClick={doDelete} />
    </div >
  )
}

export default App
