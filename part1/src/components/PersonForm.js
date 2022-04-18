const PersonForm = ({ onSubmit, onChangeName, onChangeNumber }) => {
    return (
        <form onSubmit={onSubmit} >
            <div>
                name: <input onChange={onChangeName} />
                <div>
                    number: <input onChange={onChangeNumber} />
                </div>
                <button type='submit'>
                    add
                </button>
            </div>
        </form>
    )
}
export default PersonForm