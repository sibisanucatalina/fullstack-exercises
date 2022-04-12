const Course = ({ course }) => {
    const total = course.parts.reduce((sum, part) =>
        sum + part.exercises, 0)
    return (
        <div>
            <h1>{course.name}</h1>
            <ul>
                {course.parts.map((part) =>
                    <p key={part.id}>
                        {part.name}  {part.exercises}
                    </p>
                )}
            </ul>
            <p>
                In total there are  {total}
            </p>
        </div>
    )
}

export default Course