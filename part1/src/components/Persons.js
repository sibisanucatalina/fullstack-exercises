import Numbers from "./Numbers"

const Persons = ({ peopleToShow, onClick }) => {
    return (
        <ul>
            {peopleToShow.map(person => <Numbers key={person.id} person={person} onClick={onClick} />)}
        </ul>
    )
}

export default Persons