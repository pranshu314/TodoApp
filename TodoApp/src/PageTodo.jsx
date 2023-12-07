import { useState } from "react";

function PageTodo() {
  const [todos, setTodos] = useState([{
    title: "Hello",
    description: "World!!!!",
    id: 1
  },
  {
    title: "Hello2",
    description: "How are you!!!!",
    id: 2
  },
  {
    title: "Hello3",
    description: "Just for Fun!!!",
    id: 3
  }])

  // console.log(todos)
  return (
    <center>
      <div className='container mx-auto my-8'>

        {todos.map((todo) => {
          return <div className="text-white" key={todo.id}>
            <div className="text-2xl font-bold">
              Todo{todo.id}
            </div>
            Title: {todo.title} <br />
            Description: {todo.description} <br />
            <button className="bg-slate-600 my-2 p-1 rounded hover:scale-110" onClick={() => {
              let newTodos = []
              for (let i = 0; i < todos.length; i++) {
                if (todos[i] != todo) {
                  newTodos.push(todos[i])
                }
              }
              setTodos(newTodos)
            }}>Done</button>
            <br /> <br />
          </div>
        })}

        {/* <div className='overflow-hidden no-scrollbar no-scrollbar text-white'> */}
        {/*   <p className='p-4'> */}
        {/*     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis leo a facilisis tempor. Morbi quis ipsum nisl. Aliquam mollis dui leo, luctus tempor nisl rhoncus ut. Etiam sed nulla faucibus, tincidunt turpis vitae, tempus dolor. Maecenas congue dui vel quam pellentesque, in mollis lorem vehicula. Nulla fringilla sapien at sem ullamcorper interdum. Maecenas vulputate quis ligula eget fermentum. Sed eget sollicitudin justo. Nunc ut turpis ac est tempus vestibulum. Nam mattis efficitur ultricies. Vestibulum nec ultrices est. Mauris sit amet tellus viverra odio sodales placerat nec non lorem. Integer in accumsan ligula. In mollis lacinia sollicitudin.  */}
      </div>
    </center>
  )
}

// function delTodo(id) {
//   newTodos = todos.map((value) => {
//     if (value.id != id) {
//       return value
//     }
//   })
//   setTodos(newTodos)
// }

export default PageTodo;
