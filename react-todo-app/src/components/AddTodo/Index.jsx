import { useState } from "react";
import PropTypes from 'prop-types';
import TodoItem from "../../Classes/TodoItem";

const AddForm = ({ data, setdata }) => {
  const [todo, setTodo] = useState({ title: '' });
  const [error, setError] = useState('');

  const handleAddTodo = () => {
    if (!todo.title.trim()) {
      setError('Title cannot be empty');
      return;
    }
    const newTodo = new TodoItem({ title: todo.title });
    setdata([...data, newTodo]);
    setTodo({ title: '' });
    setError('');
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <label htmlFor="">Todo Title</label>
            <input className="form-control" value={todo.title} onChange={(e) => setTodo({ ...todo, title: e.target.value })} type="text" />
            {error && <span style={{ color: 'red' }}>{error}</span>}
            <button onClick={handleAddTodo}>Add Todo</button>
          </div>
        </div>
      </div>
    </>
  );
};

AddForm.propTypes = {
  data: PropTypes.array,
  setdata: PropTypes.func
};

export default AddForm;
