import { useState } from "react"

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
   <div className="todo"
   style={{textDecoration: todo.isComplete ? "line-through  red 5px" : ""}}
   >
    {todo.text}
    <div>      
        <button className="complete" onClick={()=> completeTodo(index)}>Complete</button>
        <button className="remove"onClick={()=> removeTodo(index)}>X</button>     
    </div>
  </div>
  )
}

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
    </form>
  )
}

const App = () => {
  const [todos, setTodos] = useState([
    {text: "Example Task",
     isComplete: false
    }
    
  ])

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  }

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);

  } 

  return (
    <div className="app">
      <h2>To do List</h2>
      <div className="todo-list">  
      <TodoForm addTodo={addTodo}/>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo}/>
        ))}
        
      </div>
    </div>
  )

}



export default App;
