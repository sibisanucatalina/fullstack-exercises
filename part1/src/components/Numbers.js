
const Numbers = ({ person, onClick }) => {
  return (
    <li>
      {person.name} {person.number}
      <button onClick={() => onClick(person.id)}>delete</button>
    </li>
  )
}

export default Numbers