import { useState } from 'react';
import PropTypes from 'prop-types';


const SearchTodo = ({ todos }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const results = todos.filter(todo => todo.title.toLowerCase().includes(term.toLowerCase()));
    setSearchResults(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map((result, idx) => (
          <li key={idx}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};
SearchTodo.propTypes = {
  todos: PropTypes.array
}
export default SearchTodo;
