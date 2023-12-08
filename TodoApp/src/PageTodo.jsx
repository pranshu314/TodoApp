function PageTodo(props) {

  return (
    <center>
      <div className='container mx-auto my-8'>
        {props.todos.map((todo) => {
          return <div className="text-white" key={todo.id}>
            Title: {todo.title} <br />
            Description: {todo.description} <br />
            <button className="bg-slate-600 my-2 p-1 rounded hover:scale-110" onClick={() => {
              let newTodos = []
              for (let i = 0; i < props.todos.length; i++) {
                if (props.todos[i] != todo) {
                  newTodos.push(props.todos[i])
                }
              }
              props.setTodos(newTodos)
            }}>Done</button>
            <br /> <br />
          </div>
        })}
      </div>
    </center>
  )
}

export default PageTodo;
