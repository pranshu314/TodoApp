import { BsFillPlusCircleFill } from 'react-icons/bs'
import { IconContext } from "react-icons"
import { useState } from 'react';

function AddTodo(props) {
  const [todoModal, setTodoModal] = useState(false)
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleDescChange = (event) => {
    setDesc(event.target.value)
  }

  return (
    <div className='fixed flex-col right-0 justify-end bottom-0 mb-48 p-8 group sm:mb-96'>
      <IconContext.Provider value={{ size: '2em' }}>
        <button type='button' className='text-white group-hover:text-blue-600 group-hover:scale-125 transition-all' onClick={() => setTodoModal(true)}>
          <BsFillPlusCircleFill></BsFillPlusCircleFill>
        </button>
      </IconContext.Provider>

      {todoModal ? (
        <>
          <div
            className="justify-center items-center flex bg-black overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col text-white w-full bg-slate-700 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-4xl font-semibold">
                    Add a new todo
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setTodoModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div>Title                                                 </div>
                  <textarea value={title} onChange={handleTitleChange} className='bg-slate-500 w-full'></textarea>
                  <br />
                  <br />
                  <div>Description</div>
                  <textarea value={desc} onChange={handleDescChange} className='bg-slate-500 w-full h-40'></textarea>
                  {/* <input className='bg-slate-500'></input> */}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setTodoModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      let newTodos = props.todos.map((value) => {
                        return value
                      })
                      newTodos.push({
                        title: title,
                        description: desc,
                        id: Math.floor(Math.random() * 10000000)
                      })
                      props.setTodos(newTodos)
                      setTitle("")
                      setDesc("")
                      setTodoModal(false)
                    }}
                  >
                    Add Todo
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <span
        className='absolute w-auto p-2 min-w-max right-20 rounded-md text-white bg-blue-600 text-s font-bold transition-all duration-100 scale-0 origin-right group-hover:scale-100'
      >
        Add a Todo
      </span>
    </div>

  )
}

export default AddTodo;
