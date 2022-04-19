
const Numbers = ({ person }) => {
  return (
    <li>
      {person.name} {person.number}
      <button>delete</button>
    </li>
  )
}

export default Numbers