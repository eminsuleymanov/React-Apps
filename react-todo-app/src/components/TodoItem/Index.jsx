
import PropTypes from 'prop-types';

const TodoItem = ({ title, isDone }) => {
  return (
    <div>
      <input type="checkbox" checked={isDone} />
      <span>{title}</span>
    </div>
  );
};

TodoItem.propTypes = {
  title: PropTypes.string,
  isDone: PropTypes.bool
};

export default TodoItem;
