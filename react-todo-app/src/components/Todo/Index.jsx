import { useState } from 'react';
import TodoList from '../TodoList/Index';
import AddTodo from '../AddTodo/Index';
import TodoItem from '../TodoItem/Index';
import SearchTodo from '../SearchTodo/Index'

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo data={todos} setdata={setTodos} onAdd={handleAddTodo} />
      <SearchTodo todos={todos}/>
      <TodoList>
        {todos.map((todo) => (
          
          <TodoItem key={todo.id} {...todo} />
        ))}
      </TodoList>
    </div>
  );
};

export default Todo;
