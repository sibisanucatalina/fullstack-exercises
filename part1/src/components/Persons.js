import Numbers from "./Numbers"

const Persons = ({ peopleToShow }) => {
    return (
        <ul>
            {peopleToShow.map(person => <Numbers key={person.id} person={person} />)}
        </ul>
    )
}

export default Persons